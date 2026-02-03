## Project Overview

This is a TypeScript SDK for the Galileo API, generated using Speakeasy. The SDK is type-safe and supports both ESM and CommonJS via `tshy` dual module build system. For installation, usage examples, and API overview, see [README.md](README.md).

## Common Commands

```bash
# Build
npm run build              # tshy build → dist/esm/ and dist/commonjs/

# Linting
npm run lint               # ESLint (config: eslint.config.mjs)

# Code generation
npm run code-generation    # Regenerate SDK from OpenAPI spec via Speakeasy

# CI / automation
# sdk_generation.yaml  - Triggers regeneration and opens a PR
# sdk_publish.yaml      - Publishes package to npm
# test.yaml             - Runs lint (no test suite currently)
# validate-pr-title.yaml - Validates PR title format
```

## Architecture

### Code Generation Strategy

This repository uses **Speakeasy** for automatic code generation from an OpenAPI specification. Most of the codebase is generated and should not be manually edited.

- **Generated (DO NOT EDIT manually):** `src/funcs/`, `src/models/`, `src/sdk/`, most of `src/lib/`
- **Safe to edit (survives regeneration):** `src/entities/`, `src/hooks/` (e.g. `registration.ts`, `token-management.ts`, `error-cleaner.ts`), `src/lib/galileo-config.ts`, `src/lib/env-config.ts`, `src/lib/runtime.ts`
- **Configuration:** Edit `.speakeasy/gen.yaml` for generation and dependencies—not `package.json` directly.

### SDK Structure

The SDK uses a namespace/service pattern. Root class: `GalileoGenerated` in `src/sdk/sdk.ts`. Services: `health`, `auth`, `datasets`, `projects`, `logStream`, `trace`, `experiment`, `prompts`, `protect`, and others. Each service lives in `src/sdk/<service>.ts` and wraps functions from `src/funcs/`.

### Authentication Flow

- **Config source** (`src/lib/env-config.ts`): Node/Deno use environment variables; browser uses `globalThis.__GALILEO_AUTH__` or localStorage (`galileo_auth_config`). Resolution forks by detected runtime—not a single priority list.
- **Token management** (`src/hooks/token-management.ts`): `BeforeRequestHook` injects JWT; `AfterSuccessHook` caches tokens.
- **Entities** (`src/entities/base-entity.ts`): `authenticate()`, cached client, supports API key, username/password, and SSO.

### Hook System

Hooks are registered in `src/hooks/registration.ts`: `TokenManagementHook` (before request + after success), `ErrorCleanerHook` (after error). To add a hook: implement `BeforeRequestHook`, `AfterSuccessHook`, or `AfterErrorHook`, then register in `initHooks()`.

### Key Directories

- `src/sdk/` – SDK service classes (generated)
- `src/funcs/` – Per-operation functions (generated)
- `src/models/` – Types and Zod schemas (generated)
- `src/entities/` – Custom entity classes (safe to edit)
- `src/hooks/` – Custom hooks and registration (safe to edit)
- `src/lib/` – Core utilities; `galileo-config.ts`, `env-config.ts`, `runtime.ts` are safe to edit
- `.speakeasy/` – Speakeasy config (`gen.yaml`, `workflow.yaml`)
- `examples/` – Example scripts and `.env.template`
- `docs/` – Generated docs

### Build System

`tshy` dual build: source `src/**/*.ts` → `dist/esm/` and `dist/commonjs/`. TypeScript: `tsconfig.json` (strict). Module exports: `tshy` section in `package.json`.

## Key Patterns

### Instantiating the SDK

```typescript
import { GalileoGenerated } from "galileo-generated";

// Rely on env / browser config (resolution forks by runtime)
const sdk = new GalileoGenerated();

// Or explicit options
const sdk = new GalileoGenerated({
  serverURL: process.env["GALILEO_CONSOLE_URL"],
});
```

### Adding a Custom Hook

```typescript
// In src/hooks/registration.ts
import type { BeforeRequestHook, Hooks } from "./types.js";

class MyHook implements BeforeRequestHook {
  async beforeRequest(hookCtx, request) {
    // ...
    return request;
  }
}

export function initHooks(hooks: Hooks) {
  hooks.registerBeforeRequestHook(new MyHook());
  // ... existing TokenManagementHook, ErrorCleanerHook
}
```

### Using Entities

```typescript
import { BaseEntity } from "galileo-generated/entities/base-entity.js";

// Get token (uses env/browser config, caches client)
const token = await BaseEntity.getToken();

// Get shared SDK client
const client = BaseEntity.getCLient();
```

## Testing

- No test suite is currently configured. CI runs lint only (`test.yaml`).
- To run lint locally: `npm run lint`.

## Configuration

Explicit constructor options always take precedence. After that, resolution **forks by detected runtime** (Node/Deno vs browser), not a single global order.

- **All runtimes:** Explicit constructor options first.
- **Node.js / Deno:** Environment variables (e.g. `GALILEO_API_KEY`, `GALILEO_CONSOLE_URL`).
- **Browser:** `globalThis.__GALILEO_AUTH__`, then localStorage `galileo_auth_config`.

### Environment Variables (Quick Reference)

| Variable | Purpose |
|----------|---------|
| `GALILEO_API_KEY` | API key auth |
| `GALILEO_USERNAME` / `GALILEO_PASSWORD` | Username/password auth |
| `GALILEO_SSO_ID_TOKEN` / `GALILEO_SSO_PROVIDER` | SSO auth |
| `GALILEO_CONSOLE_URL` | Override API base URL (default: app.galileo.ai) |
| `GALILEO_API_URL` | Alternative API URL |
| `GALILEO_PROJECT` | Default project |
| `GALILEO_LOG_STREAM` | Default log stream |

### Required Practices

- Use TypeScript strict settings: all strict flags, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`. Ensure new code complies.
- For API changes: update the OpenAPI spec and run `npm run code-generation`.
- For custom logic: add code in `src/entities/` or new hooks in `src/hooks/`; register hooks in `initHooks()`.
- For dependencies: edit `.speakeasy/gen.yaml` under `typescript.additionalDependencies`; Speakeasy regenerates `package.json`.
- This repo is generated; do not open PRs that edit generated files. Report issues and suggest fixes via [CONTRIBUTING.md](CONTRIBUTING.md).
