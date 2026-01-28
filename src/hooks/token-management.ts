/*
 * Token management hooks for automatic token injection and extraction.
 */

import { BaseEntity } from "../entities/base-entity.js";
import type {
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
} from "./types.js";

/**
 * List of operation IDs that are authentication endpoints.
 * These endpoints should NOT have tokens added, and SHOULD have tokens extracted.
 */
const AUTH_OPERATION_IDS = new Set([
  "login_email_login_post",
  "login_api_key_login_api_key_post",
]);

/**
 * Hook that manages authentication tokens automatically:
 * - Adds stored token to non-auth requests
 * - Extracts and stores tokens from auth responses
 */
export class TokenManagementHook
  implements BeforeRequestHook, AfterSuccessHook
{
  /**
   * Checks if an operation is an authentication endpoint.
   */
  private isAuthOperation(operationID: string): boolean {
    return AUTH_OPERATION_IDS.has(operationID);
  }

  /**
   * Adds the stored token to the request Authorization header if:
   * - The operation is NOT an auth endpoint
   * - A token exists in BaseEntity.token
   */
  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    // Skip auth endpoints - they don't need tokens
    if (this.isAuthOperation(hookCtx.operationID)) {
      return request;
    }

    // Skip if no token is stored
    const token = await BaseEntity.getToken();
    if (!token) {
      return request;
    }

    // Check if Authorization header already exists
    // Don't override if it's already set (e.g., by OAuth2 hook)
    if (request.headers.has("Authorization")) {
      return request;
    }

    // Add Bearer token to Authorization header
    const newRequest = request.clone();
    newRequest.headers.set("Authorization", `Bearer ${token}`);

    return newRequest;
  }

  /**
   * Extracts and stores tokens from auth endpoint responses.
   */
  async afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response,
  ): Promise<Response> {
    // Only process auth endpoints
    if (!this.isAuthOperation(hookCtx.operationID)) {
      return response;
    }

    // Only process successful responses
    if (!response.ok) {
      return response;
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return response;
    }

    try {
      // Clone response to read body without consuming it
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();

      // Extract accessToken from Token model
      if (data && typeof data === "object" && "accessToken" in data) {
        const token = data.accessToken;
        if (typeof token === "string" && token.length > 0) {
          // Store token in BaseEntity using public method
          BaseEntity.setToken(token);
        }
      } else if (data && typeof data === "object" && "access_token" in data) {
        // Handle snake_case format (from API response before transformation)
        const token = data.access_token;
        if (typeof token === "string" && token.length > 0) {
          BaseEntity.setToken(token);
        }
      }
    } catch (error) {
      // Log error but don't throw - let the response continue
      console.warn(
        `Failed to extract token from auth response: ${error}`,
      );
    }

    return response;
  }
}

