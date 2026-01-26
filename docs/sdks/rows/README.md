# Rows

## Overview

### Available Operations

* [createScorersPost](#createscorerspost) - Create
* [updateScorersScorerIdPatch](#updatescorersscoreridpatch) - Update
* [deleteScorerScorersScorerIdDelete](#deletescorerscorersscoreriddelete) - Delete Scorer
* [getScorerScorersScorerIdGet](#getscorerscorersscoreridget) - Get Scorer
* [createLlmScorerVersionScorersScorerIdVersionLlmPost](#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
* [validateCodeScorerScorersCodeValidatePost](#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
* [validateCodeScorerLogRecordScorersCodeValidateLogRecordPost](#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
* [getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet](#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
* [createCodeScorerVersionScorersScorerIdVersionCodePost](#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
* [getScorerVersionCodeScorersScorerIdVersionCodeGet](#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
* [createPresetScorerVersionScorersScorerIdVersionPresetPost](#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
* [createLunaScorerVersionScorersScorerIdVersionLunaPost](#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
* [listScorersWithFiltersScorersListPost](#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
* [listTagsScorersTagsGet](#listtagsscorerstagsget) - List Tags
* [getScorerVersionOrLatestScorersScorerIdVersionGet](#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
* [listAllVersionsForScorerScorersScorerIdVersionsGet](#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
* [listProjectsForScorerRouteScorersScorerIdProjectsGet](#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
* [listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet](#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
* [restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost](#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
* [autogenLlmScorerScorersLlmAutogenPost](#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
* [manualLlmValidateScorersLlmValidatePost](#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
* [validateLlmScorerLogRecordScorersLlmValidateLogRecordPost](#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record

## createScorersPost

Create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_scorers_post" method="post" path="/scorers" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.createScorersPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    name: "<value>",
    scorerType: "preset",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreateScorersPost } from "galileo-generated/funcs/promptsCreateScorersPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateScorersPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    name: "<value>",
    scorerType: "preset",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateScorersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateScorerRequest](../../models/createscorerrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateScorersPostSecurity](../../models/operations/createscorerspostsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScorerResponse](../../models/scorerresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateScorersScorerIdPatch

Update

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_scorers__scorer_id__patch" method="patch" path="/scorers/{scorer_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.updateScorersScorerIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsUpdateScorersScorerIdPatch } from "galileo-generated/funcs/promptsUpdateScorersScorerIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsUpdateScorersScorerIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsUpdateScorersScorerIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScorersScorerIdPatchRequest](../../models/operations/updatescorersscoreridpatchrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateScorersScorerIdPatchSecurity](../../models/operations/updatescorersscoreridpatchsecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScorerResponse](../../models/scorerresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteScorerScorersScorerIdDelete

Delete Scorer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_scorer_scorers__scorer_id__delete" method="delete" path="/scorers/{scorer_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.deleteScorerScorersScorerIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsDeleteScorerScorersScorerIdDelete } from "galileo-generated/funcs/promptsDeleteScorerScorersScorerIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsDeleteScorerScorersScorerIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsDeleteScorerScorersScorerIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScorerScorersScorerIdDeleteRequest](../../models/operations/deletescorerscorersscoreriddeleterequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteScorerScorersScorerIdDeleteSecurity](../../models/operations/deletescorerscorersscoreriddeletesecurity.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeleteScorerResponse](../../models/deletescorerresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getScorerScorersScorerIdGet

Get Scorer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_scorer_scorers__scorer_id__get" method="get" path="/scorers/{scorer_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.getScorerScorersScorerIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetScorerScorersScorerIdGet } from "galileo-generated/funcs/promptsGetScorerScorersScorerIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetScorerScorersScorerIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetScorerScorersScorerIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScorerScorersScorerIdGetRequest](../../models/operations/getscorerscorersscoreridgetrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetScorerScorersScorerIdGetSecurity](../../models/operations/getscorerscorersscoreridgetsecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ScorerResponse](../../models/scorerresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createLlmScorerVersionScorersScorerIdVersionLlmPost

Create Llm Scorer Version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_llm_scorer_version_scorers__scorer_id__version_llm_post" method="post" path="/scorers/{scorer_id}/version/llm" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.createLlmScorerVersionScorersScorerIdVersionLlmPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost } from "galileo-generated/funcs/promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLlmScorerVersionScorersScorerIdVersionLlmPostRequest](../../models/operations/createllmscorerversionscorersscoreridversionllmpostrequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateLlmScorerVersionScorersScorerIdVersionLlmPostSecurity](../../models/operations/createllmscorerversionscorersscoreridversionllmpostsecurity.md)               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## validateCodeScorerScorersCodeValidatePost

Validate a code scorer with optional simple input/output test.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_code_scorer_scorers_code_validate_post" method="post" path="/scorers/code/validate" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.validateCodeScorerScorersCodeValidatePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsValidateCodeScorerScorersCodeValidatePost } from "galileo-generated/funcs/promptsValidateCodeScorerScorersCodeValidatePost.js";
import { openAsBlob } from "node:fs";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsValidateCodeScorerScorersCodeValidatePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsValidateCodeScorerScorersCodeValidatePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BodyValidateCodeScorerScorersCodeValidatePost](../../models/bodyvalidatecodescorerscorerscodevalidatepost.md)                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ValidateCodeScorerScorersCodeValidatePostSecurity](../../models/operations/validatecodescorerscorerscodevalidatepostsecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ValidateCodeScorerResponse](../../models/validatecodescorerresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## validateCodeScorerLogRecordScorersCodeValidateLogRecordPost

Validate a code scorer using actual log records.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_code_scorer_log_record_scorers_code_validate_log_record_post" method="post" path="/scorers/code/validate/log_record" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.validateCodeScorerLogRecordScorersCodeValidateLogRecordPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost } from "galileo-generated/funcs/promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost.js";
import { openAsBlob } from "node:fs";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [models.BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost](../../models/bodyvalidatecodescorerlogrecordscorerscodevalidatelogrecordpost.md)                        | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.ValidateCodeScorerLogRecordScorersCodeValidateLogRecordPostSecurity](../../models/operations/validatecodescorerlogrecordscorerscodevalidatelogrecordpostsecurity.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.ValidateScorerLogRecordResponse](../../models/validatescorerlogrecordresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet

Poll for a code-scorer validation task result (returns status/result).

The validation job creates an entry in `registered_scorer_task_results` (pending) and the runner
will PATCH the internal task-results endpoint when it finishes. This GET allows clients to poll
the current task result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_validate_code_scorer_task_result_scorers_code_validate__task_id__get" method="get" path="/scorers/code/validate/{task_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    taskId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet } from "galileo-generated/funcs/promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    taskId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGetRequest](../../models/operations/getvalidatecodescorertaskresultscorerscodevalidatetaskidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.GetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGetSecurity](../../models/operations/getvalidatecodescorertaskresultscorerscodevalidatetaskidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.RegisteredScorerTaskResultResponse](../../models/registeredscorertaskresultresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createCodeScorerVersionScorersScorerIdVersionCodePost

Create Code Scorer Version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_code_scorer_version_scorers__scorer_id__version_code_post" method="post" path="/scorers/{scorer_id}/version/code" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.createCodeScorerVersionScorersScorerIdVersionCodePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost } from "galileo-generated/funcs/promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost.js";
import { openAsBlob } from "node:fs";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCodeScorerVersionScorersScorerIdVersionCodePostRequest](../../models/operations/createcodescorerversionscorersscoreridversioncodepostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateCodeScorerVersionScorersScorerIdVersionCodePostSecurity](../../models/operations/createcodescorerversionscorersscoreridversioncodepostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getScorerVersionCodeScorersScorerIdVersionCodeGet

Get Scorer Version Code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_scorer_version_code_scorers__scorer_id__version_code_get" method="get" path="/scorers/{scorer_id}/version/code" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.getScorerVersionCodeScorersScorerIdVersionCodeGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet } from "galileo-generated/funcs/promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScorerVersionCodeScorersScorerIdVersionCodeGetRequest](../../models/operations/getscorerversioncodescorersscoreridversioncodegetrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetScorerVersionCodeScorersScorerIdVersionCodeGetSecurity](../../models/operations/getscorerversioncodescorersscoreridversioncodegetsecurity.md)                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createPresetScorerVersionScorersScorerIdVersionPresetPost

Create a preset scorer version.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_preset_scorer_version_scorers__scorer_id__version_preset_post" method="post" path="/scorers/{scorer_id}/version/preset" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.createPresetScorerVersionScorersScorerIdVersionPresetPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost } from "galileo-generated/funcs/promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePresetScorerVersionScorersScorerIdVersionPresetPostRequest](../../models/operations/createpresetscorerversionscorersscoreridversionpresetpostrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreatePresetScorerVersionScorersScorerIdVersionPresetPostSecurity](../../models/operations/createpresetscorerversionscorersscoreridversionpresetpostsecurity.md)   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createLunaScorerVersionScorersScorerIdVersionLunaPost

Create Luna Scorer Version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_luna_scorer_version_scorers__scorer_id__version_luna_post" method="post" path="/scorers/{scorer_id}/version/luna" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.createLunaScorerVersionScorersScorerIdVersionLunaPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      loraTaskId: 603023,
      prompt: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost } from "galileo-generated/funcs/promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      loraTaskId: 603023,
      prompt: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLunaScorerVersionScorersScorerIdVersionLunaPostRequest](../../models/operations/createlunascorerversionscorersscoreridversionlunapostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateLunaScorerVersionScorersScorerIdVersionLunaPostSecurity](../../models/operations/createlunascorerversionscorersscoreridversionlunapostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listScorersWithFiltersScorersListPost

List Scorers With Filters

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_scorers_with_filters_scorers_list_post" method="post" path="/scorers/list" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.listScorersWithFiltersScorersListPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      filters: [
        {
          name: "creator",
          operator: "eq",
          value: [
            "<value 1>",
          ],
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListScorersWithFiltersScorersListPost } from "galileo-generated/funcs/promptsListScorersWithFiltersScorersListPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListScorersWithFiltersScorersListPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      filters: [
        {
          name: "creator",
          operator: "eq",
          value: [
            "<value 1>",
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListScorersWithFiltersScorersListPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListScorersWithFiltersScorersListPostRequest](../../models/operations/listscorerswithfiltersscorerslistpostrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListScorersWithFiltersScorersListPostSecurity](../../models/operations/listscorerswithfiltersscorerslistpostsecurity.md)                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListScorersResponse](../../models/listscorersresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listTagsScorersTagsGet

List Tags

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_tags_scorers_tags_get" method="get" path="/scorers/tags" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.listTagsScorersTagsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListTagsScorersTagsGet } from "galileo-generated/funcs/promptsListTagsScorersTagsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListTagsScorersTagsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListTagsScorersTagsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.ListTagsScorersTagsGetSecurity](../../models/operations/listtagsscorerstagsgetsecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getScorerVersionOrLatestScorersScorerIdVersionGet

Get Scorer Version Or Latest

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_scorer_version_or_latest_scorers__scorer_id__version_get" method="get" path="/scorers/{scorer_id}/version" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.getScorerVersionOrLatestScorersScorerIdVersionGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetScorerVersionOrLatestScorersScorerIdVersionGet } from "galileo-generated/funcs/promptsGetScorerVersionOrLatestScorersScorerIdVersionGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetScorerVersionOrLatestScorersScorerIdVersionGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetScorerVersionOrLatestScorersScorerIdVersionGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScorerVersionOrLatestScorersScorerIdVersionGetRequest](../../models/operations/getscorerversionorlatestscorersscoreridversiongetrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetScorerVersionOrLatestScorersScorerIdVersionGetSecurity](../../models/operations/getscorerversionorlatestscorersscoreridversiongetsecurity.md)                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listAllVersionsForScorerScorersScorerIdVersionsGet

List All Versions For Scorer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_all_versions_for_scorer_scorers__scorer_id__versions_get" method="get" path="/scorers/{scorer_id}/versions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.listAllVersionsForScorerScorersScorerIdVersionsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListAllVersionsForScorerScorersScorerIdVersionsGet } from "galileo-generated/funcs/promptsListAllVersionsForScorerScorersScorerIdVersionsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListAllVersionsForScorerScorersScorerIdVersionsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListAllVersionsForScorerScorersScorerIdVersionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllVersionsForScorerScorersScorerIdVersionsGetRequest](../../models/operations/listallversionsforscorerscorersscoreridversionsgetrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAllVersionsForScorerScorersScorerIdVersionsGetSecurity](../../models/operations/listallversionsforscorerscorersscoreridversionsgetsecurity.md)                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListScorerVersionsResponse](../../models/listscorerversionsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listProjectsForScorerRouteScorersScorerIdProjectsGet

List all projects associated with a specific scorer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_projects_for_scorer_route_scorers__scorer_id__projects_get" method="get" path="/scorers/{scorer_id}/projects" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.listProjectsForScorerRouteScorersScorerIdProjectsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListProjectsForScorerRouteScorersScorerIdProjectsGet } from "galileo-generated/funcs/promptsListProjectsForScorerRouteScorersScorerIdProjectsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListProjectsForScorerRouteScorersScorerIdProjectsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListProjectsForScorerRouteScorersScorerIdProjectsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProjectsForScorerRouteScorersScorerIdProjectsGetRequest](../../models/operations/listprojectsforscorerroutescorersscoreridprojectsgetrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListProjectsForScorerRouteScorersScorerIdProjectsGetSecurity](../../models/operations/listprojectsforscorerroutescorersscoreridprojectsgetsecurity.md)             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiSchemasProjectV2GetProjectsPaginatedResponse](../../models/apischemasprojectv2getprojectspaginatedresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet

List all projects associated with a specific scorer version.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_projects_for_scorer_version_route_scorers_versions__scorer_version_id__projects_get" method="get" path="/scorers/versions/{scorer_version_id}/projects" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerVersionId: "<value>",
    scorerId: "<value>",
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
  promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet,
} from "galileo-generated/funcs/promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerVersionId: "<value>",
    scorerId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.ListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGetRequest](../../models/operations/listprojectsforscorerversionroutescorersversionsscorerversionidprojectsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.ListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGetSecurity](../../models/operations/listprojectsforscorerversionroutescorersversionsscorerversionidprojectsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[models.ApiSchemasProjectV2GetProjectsPaginatedResponse](../../models/apischemasprojectv2getprojectspaginatedresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost

List all scorers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="restore_scorer_version_scorers__scorer_id__versions__version_number__restore_post" method="post" path="/scorers/{scorer_id}/versions/{version_number}/restore" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    versionNumber: 388789,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost } from "galileo-generated/funcs/promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    versionNumber: 388789,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.RestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePostRequest](../../models/operations/restorescorerversionscorersscoreridversionsversionnumberrestorepostrequest.md)   | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `security`                                                                                                                                                                                       | [operations.RestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePostSecurity](../../models/operations/restorescorerversionscorersscoreridversionsversionnumberrestorepostsecurity.md) | :heavy_check_mark:                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[models.BaseScorerVersionResponse](../../models/basescorerversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## autogenLlmScorerScorersLlmAutogenPost

Autogenerate an LLM scorer configuration.

Returns a Celery task ID that can be used to poll for the autogeneration results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="autogen_llm_scorer_scorers_llm_autogen_post" method="post" path="/scorers/llm/autogen" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.autogenLlmScorerScorersLlmAutogenPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    instructions: "<value>",
    modelName: "<value>",
    outputType: "discrete",
    cotEnabled: false,
    scoreableNodeTypes: [
      "<value 1>",
      "<value 2>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsAutogenLlmScorerScorersLlmAutogenPost } from "galileo-generated/funcs/promptsAutogenLlmScorerScorersLlmAutogenPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsAutogenLlmScorerScorersLlmAutogenPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    instructions: "<value>",
    modelName: "<value>",
    outputType: "discrete",
    cotEnabled: false,
    scoreableNodeTypes: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsAutogenLlmScorerScorersLlmAutogenPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateLLMScorerAutogenRequest](../../models/createllmscorerautogenrequest.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AutogenLlmScorerScorersLlmAutogenPostSecurity](../../models/operations/autogenllmscorerscorersllmautogenpostsecurity.md)                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GenerationResponse](../../models/generationresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## manualLlmValidateScorersLlmValidatePost

Manual Llm Validate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="manual_llm_validate_scorers_llm_validate_post" method="post" path="/scorers/llm/validate" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.manualLlmValidateScorersLlmValidatePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsManualLlmValidateScorersLlmValidatePost } from "galileo-generated/funcs/promptsManualLlmValidateScorersLlmValidatePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsManualLlmValidateScorersLlmValidatePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsManualLlmValidateScorersLlmValidatePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [{ [k: string]: any }](../../models/.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ManualLlmValidateScorersLlmValidatePostSecurity](../../models/operations/manualllmvalidatescorersllmvalidatepostsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GeneratedScorerValidationResponse](../../models/generatedscorervalidationresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## validateLlmScorerLogRecordScorersLlmValidateLogRecordPost

Validate Llm Scorer Log Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_llm_scorer_log_record_scorers_llm_validate_log_record_post" method="post" path="/scorers/llm/validate/log_record" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.rows.validateLlmScorerLogRecordScorersLlmValidateLogRecordPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "00000000-0000-0000-0000-000000000000",
    filters: [
      {
        columnId: "<id>",
        operator: "eq",
        value: "example input",
        caseSensitive: true,
        type: "text",
      },
    ],
    sort: {
      columnId: "<id>",
      ascending: false,
    },
    query: "<value>",
    response: "<value>",
    chainPollTemplate: {
      template: "<value>",
    },
    scorerConfiguration: {},
    userPrompt: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost } from "galileo-generated/funcs/promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "00000000-0000-0000-0000-000000000000",
    filters: [
      {
        columnId: "<id>",
        operator: "eq",
        value: "example input",
        caseSensitive: true,
        type: "text",
      },
    ],
    sort: {
      columnId: "<id>",
      ascending: false,
    },
    query: "<value>",
    response: "<value>",
    chainPollTemplate: {
      template: "<value>",
    },
    scorerConfiguration: {},
    userPrompt: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ValidateLLMScorerLogRecordRequest](../../models/validatellmscorerlogrecordrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ValidateLlmScorerLogRecordScorersLlmValidateLogRecordPostSecurity](../../models/operations/validatellmscorerlogrecordscorersllmvalidatelogrecordpostsecurity.md)   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ValidateLLMScorerLogRecordResponse](../../models/validatellmscorerlogrecordresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |