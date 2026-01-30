# galileo-generated

Developer-friendly & type-safe Typescript SDK specifically catered to leverage Galileo API.

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add galileo-generated
```

### PNPM

```bash
pnpm add galileo-generated
```

### Bun

```bash
bun add galileo-generated
```

### Yarn

```bash
yarn add galileo-generated
```

> [!NOTE]
> This package is published with ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Setup Instructions -->
## Setup

Set the following environment variables:

    GALILEO_API_KEY: Your Galileo API key
    or
    GALILEO_USERNAME: Your Galileo username
    GALILEO_PASSWORD: Your Galileo password
    
    GALILEO_PROJECT: (Optional) Project name
    GALILEO_LOG_STREAM: (Optional) Log stream name

Note: if you would like to point to an environment other than app.galileo.ai, you'll need to set the GALILEO_CONSOLE_URL environment variable.

<!-- End Setup Instructions -->

<!-- Start Code Generation Instructions -->
## Code Generation Instructions

### NPM Script

1. Install the Speakeasy CLI (instructions [here](https://www.speakeasy.com/docs/sdks/create-client-sdks));
2. Execute following script:
``` 
npm run code-generation
```

### Github Actions
Execute action *Generate SDK* to trigger a new PR with proposed changes based on code generation. The PR has to be reviewed to be merged. 
<br>If you are in the SDK team on Galileo org, you'll see an additional option to filter out generated files, to help validate only custom code (not Speakeasy-generated);



### Implementing features or bug fixes
- Some directories and files are safe to be edited without being overwritten by codegen:
   - /src/entities
   - Some custom /lib files
   - Test files
   
- For editing package.js (dependencies, scripts), update file .speakeasy/gen.yaml. Most common options are mirrored by a Speakeasy attribute;

<!-- End Code Generation Instructions -->


<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  serverURL: "https://api.galileo.ai",
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { GalileoGenerated } from "galileo-generated";
import { HTTPClient } from "galileo-generated/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new GalileoGenerated({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { GalileoGenerated } from "galileo-generated";

const sdk = new GalileoGenerated({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GALILEOGENERATED_DEBUG` to true.
<!-- End Debugging [debug] -->
