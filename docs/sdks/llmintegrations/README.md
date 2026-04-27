# LlmIntegrations

## Overview

### Available Operations

* [getAvailableModelsLlmIntegrationsLlmIntegrationModelsGet](#getavailablemodelsllmintegrationsllmintegrationmodelsget) - Get Available Models
* [getAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet](#getavailablescorermodelsllmintegrationsllmintegrationscorermodelsget) - Get Available Scorer Models

## getAvailableModelsLlmIntegrationsLlmIntegrationModelsGet

Get the list of supported models for the LLM integration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_available_models_llm_integrations__llm_integration__models_get" method="get" path="/llm_integrations/{llm_integration}/models" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.llmIntegrations.getAvailableModelsLlmIntegrationsLlmIntegrationModelsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    llmIntegration: "vertex_ai",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { llmIntegrationsGetAvailableModelsLlmIntegrationsLlmIntegrationModelsGet } from "galileo-generated/funcs/llmIntegrationsGetAvailableModelsLlmIntegrationsLlmIntegrationModelsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await llmIntegrationsGetAvailableModelsLlmIntegrationsLlmIntegrationModelsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    llmIntegration: "vertex_ai",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("llmIntegrationsGetAvailableModelsLlmIntegrationsLlmIntegrationModelsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAvailableModelsLlmIntegrationsLlmIntegrationModelsGetRequest](../../models/operations/getavailablemodelsllmintegrationsllmintegrationmodelsgetrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAvailableModelsLlmIntegrationsLlmIntegrationModelsGetSecurity](../../models/operations/getavailablemodelsllmintegrationsllmintegrationmodelsgetsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet

Get the list of supported scorer models for the LLM integration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_available_scorer_models_llm_integrations__llm_integration__scorer_models_get" method="get" path="/llm_integrations/{llm_integration}/scorer_models" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.llmIntegrations.getAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    llmIntegration: "databricks",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import {
  llmIntegrationsGetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet,
} from "galileo-generated/funcs/llmIntegrationsGetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await llmIntegrationsGetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    llmIntegration: "databricks",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("llmIntegrationsGetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.GetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGetRequest](../../models/operations/getavailablescorermodelsllmintegrationsllmintegrationscorermodelsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.GetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGetSecurity](../../models/operations/getavailablescorermodelsllmintegrationsllmintegrationscorermodelsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |