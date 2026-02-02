# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

This is a TypeScript SDK for the Galileo API, generated using Speakeasy. The SDK is type-safe and supports both ESM and CommonJS via `tshy` dual module build system.

For installation, usage examples, and API overview, see [README.md](README.md).

## Project Structure

galileo-ts-generated/
├── src/           # TypeScript source (sdk/, funcs/, models/, entities/, hooks/, lib/)
├── examples/      # Example scripts and .env.template
├── docs/          # Generated docs (models/, sdks/, lib/)
├── .speakeasy/    # Speakeasy config (gen.yaml, workflow.yaml)
├── .github/       # Workflows (sdk_generation, sdk_publish, test, validate-pr-title)
└── dist/          # Build output (esm/, commonjs/) from npm run build

## Key Commands

### Build
```bash
npm run build
```
Builds the project using tshy, which generates both ESM (`dist/esm/`) and CommonJS (`dist/commonjs/`) outputs.

### Linting
```bash
npm run lint
```
Runs ESLint with TypeScript support. Configuration in `eslint.config.mjs`.

### Code Generation
```bash
npm run code-generation
```
Regenerates SDK code from the OpenAPI spec using Speakeasy. This is the primary way to update generated code.

## Architecture

### Code Generation Strategy

This repository uses **Speakeasy** for automatic code generation from an OpenAPI specification. Most of the codebase is generated and should not be manually edited.

**Generated (DO NOT EDIT manually):**
- All files in `src/funcs/` - Individual API operation functions
- All files in `src/models/` - Type definitions and Zod schemas
- All files in `src/sdk/` (except noted below) - SDK service classes
- Most files in `src/lib/` - Core SDK utilities

**Safe to Edit (survives regeneration):**
- `src/entities/` - Custom entity classes
- `src/hooks/` - Custom SDK hooks
  - `registration.ts` - Hook initialization (safe to modify)
  - `token-management.ts` - Auth token handling (custom)
  - `error-cleaner.ts` - Error transformation (custom)
- `src/lib/galileo-config.ts` - Galileo-specific configuration
- `src/lib/env-config.ts` - Environment configuration store
- `src/lib/runtime.ts` - Runtime detection utilities

**Configuration:**
- `.speakeasy/gen.yaml` - Speakeasy generation config (edit this instead of `package.json` for dependencies/scripts)

### Authentication Flow

The SDK supports multiple authentication methods, managed through hooks:

1. **Environment-based configuration** (`src/lib/env-config.ts`):
   - Reads from env vars: `GALILEO_API_KEY`, `GALILEO_USERNAME`, `GALILEO_PASSWORD`, `GALILEO_SSO_ID_TOKEN`, `GALILEO_SSO_PROVIDER`
   - Also supports: `GALILEO_CONSOLE_URL`, `GALILEO_API_URL`, `GALILEO_PROJECT`, `GALILEO_LOG_STREAM`
   - Browser support via `globalThis.__GALILEO_AUTH__` or localStorage

2. **Token management** (`src/hooks/token-management.ts`):
   - Implements `BeforeRequestHook` to inject JWT tokens
   - Implements `AfterSuccessHook` to cache tokens from auth responses
   - Automatic token refresh via OAuth2 password flow

3. **Base entity pattern** (`src/entities/base-entity.ts`):
   - Provides `authenticate()` method for explicit login
   - Caches SDK client instance
   - Supports API key, username/password, and SSO authentication

### SDK Structure

The SDK uses a namespace/service pattern:

```
GalileoGenerated (root SDK class in src/sdk/sdk.ts)
├── health
├── auth
├── datasets
├── projects
├── logStream
├── trace
├── experiment
├── prompts
├── protect
└── ... (other services)
```

Each service namespace (e.g., `datasets`) is implemented in `src/sdk/<service>.ts` and wraps individual function calls from `src/funcs/`.

### Hook System

Custom hooks are registered in `src/hooks/registration.ts`:
- `TokenManagementHook` - Handles JWT token injection and caching
- `ErrorCleanerHook` - Transforms/cleans error responses

To add new hooks:
1. Create hook class implementing `BeforeRequestHook`, `AfterSuccessHook`, or `AfterErrorHook`
2. Register in `initHooks()` function in `registration.ts`

### Build System

Uses `tshy` for dual ESM/CommonJS builds:
- Source: `src/**/*.ts`
- Output: `dist/esm/` (ES modules) and `dist/commonjs/` (CommonJS)
- TypeScript config: `tsconfig.json` with strict mode enabled
- The `tshy` section in `package.json` defines module exports

## GitHub Actions

- **sdk_generation.yaml** - Triggers SDK regeneration and creates a PR
- **sdk_publish.yaml** - Publishes package to npm
- **test.yaml** - Runs linting (no test suite currently configured)
- **validate-pr-title.yaml** - Validates PR title format

## Development Guidelines

### Implementing Features

1. **For API changes**: Update the OpenAPI spec and run `npm run code-generation`
2. **For custom logic**: Add to `src/entities/` or create custom hooks in `src/hooks/`
3. **For config changes**: Edit `.speakeasy/gen.yaml` (not `package.json` directly)
4. **For contributing**: This repository is generated; do not open PRs that edit generated files. See [CONTRIBUTING.md](CONTRIBUTING.md) for issue reporting and upstream fixes.

### Modifying Dependencies

Edit `.speakeasy/gen.yaml` under `typescript.additionalDependencies` instead of `package.json`. Speakeasy will regenerate `package.json` on the next generation run.

### TypeScript Strictness

This project uses TypeScript's strictest settings (`tsconfig.json`):
- All strict flags enabled
- `noUncheckedIndexedAccess: true`
- `exactOptionalPropertyTypes: true`

Ensure new code adheres to these strict typing requirements.

### Environment Configuration Priority

Explicit constructor options always take precedence. After that, resolution **forks by detected runtime**—Node.js/Deno and browser use different sources; they are not ordered relative to each other.

- **Priority 1 (all runtimes):** Explicit constructor options
- **Node.js / Deno:** Environment variables (e.g. `GALILEO_API_KEY`, `GALILEO_CONSOLE_URL`)
- **Browser:** `globalThis.__GALILEO_AUTH__`, then fallback to localStorage (`galileo_auth_config`)

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
