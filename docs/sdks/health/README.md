# Health

## Overview

### Available Operations

* [healthcheckHealthcheckGet](#healthcheckhealthcheckget) - Healthcheck

## healthcheckHealthcheckGet

Healthcheck

### Example Usage

<!-- UsageSnippet language="typescript" operationID="healthcheck_healthcheck_get" method="get" path="/healthcheck" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  oAuth2PasswordBearer: process.env["GALILEOGENERATED_O_AUTH2_PASSWORD_BEARER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { healthHealthcheckHealthcheckGet } from "galileo-generated/funcs/healthHealthcheckHealthcheckGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore({
  oAuth2PasswordBearer: process.env["GALILEOGENERATED_O_AUTH2_PASSWORD_BEARER"] ?? "",
});

async function run() {
  const res = await healthHealthcheckHealthcheckGet(galileoGenerated);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthHealthcheckHealthcheckGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.HealthcheckResponse](../../models/healthcheckresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |