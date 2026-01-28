import {
	GalileoAPIError,
	GENERIC_ERROR_MESSAGE,
	getErrorDetailMessage,
	INVALID_STANDARD_ERROR_MESSAGE,
	isGalileoAPIStandardErrorData,
} from "../types/custom-errors.js";
import type { AfterErrorContext, AfterErrorHook } from "./types.js";

/**
 * Hook that customizes the error message for the Galileo API.
 */
export class ErrorCleanerHook implements AfterErrorHook {
	async afterError(
		hookCtx: AfterErrorContext,
		response: Response | null,
		error: unknown,
	): Promise<{ response: Response | null; error: unknown }> {
		void hookCtx;

		try{
			if (!response) return { response, error };

			const bodyText = await response.clone().text();
			if (!bodyText) return { response, error };

			const data = JSON.parse(bodyText);
			if (!data || typeof data !== "object") throw new Error("Invalid data received");

			const dataRecord = data as Record<string, unknown>;
			if ("standard_error" in dataRecord) {
				const standardError = dataRecord["standard_error"];
				if (isGalileoAPIStandardErrorData(standardError)) {
					return {
						response,
						error: new GalileoAPIError(standardError),
					};
				}

				return {
					response,
					error: new Error(INVALID_STANDARD_ERROR_MESSAGE),
				};
			}

			if ("detail" in dataRecord) {
				const detailMessage =
					getErrorDetailMessage(dataRecord["detail"]) ?? GENERIC_ERROR_MESSAGE;
				const statusCode = response.status;

				if (statusCode) {
					return {
						response,
						error: new Error(
							`Something didn't go quite right. The API returned a non-ok status code ${statusCode} with output: ${detailMessage}`,
						),
					};
				}

				return {
					response,
					error: new Error(
						`Something didn't go quite right. ${detailMessage}`,
					),
				};
			}

			return { response, error };
		}catch(error){
			return { response, error };
		}
	}
}
