# Auth

## Overview

### Available Operations

* [loginEmailLoginPost](#loginemailloginpost) - Login Email
* [loginApiKeyLoginApiKeyPost](#loginapikeyloginapikeypost) - Login Api Key

## loginEmailLoginPost

Login Email

### Example Usage

<!-- UsageSnippet language="typescript" operationID="login_email_login_post" method="post" path="/login" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.auth.loginEmailLoginPost({
    username: "Araceli_Herzog",
    password: "vochafN1SS9zPdo",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { authLoginEmailLoginPost } from "galileo-generated/funcs/authLoginEmailLoginPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await authLoginEmailLoginPost(galileoGenerated, {
    username: "Araceli_Herzog",
    password: "vochafN1SS9zPdo",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authLoginEmailLoginPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BodyLoginEmailLoginPost](../../models/bodyloginemailloginpost.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Token](../../models/token.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## loginApiKeyLoginApiKeyPost

Login Api Key

### Example Usage

<!-- UsageSnippet language="typescript" operationID="login_api_key_login_api_key_post" method="post" path="/login/api_key" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.auth.loginApiKeyLoginApiKeyPost({
    apiKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { authLoginApiKeyLoginApiKeyPost } from "galileo-generated/funcs/authLoginApiKeyLoginApiKeyPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await authLoginApiKeyLoginApiKeyPost(galileoGenerated, {
    apiKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authLoginApiKeyLoginApiKeyPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ApiKeyLoginRequest](../../models/apikeyloginrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Token](../../models/token.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |