# Prompts

## Overview

### Available Operations

* [createPromptTemplateWithVersionProjectsProjectIdTemplatesPost](#createprompttemplatewithversionprojectsprojectidtemplatespost) - Create Prompt Template With Version
* [getProjectTemplatesProjectsProjectIdTemplatesGet](#getprojecttemplatesprojectsprojectidtemplatesget) - Get Project Templates
* [getTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet](#gettemplateversionbynameprojectsprojectidtemplatesversionsget) - Get Template Version By Name
* [~~getTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet~~](#gettemplatefromprojectprojectsprojectidtemplatestemplateidget) - Get Template From Project :warning: **Deprecated**
* [~~deleteTemplateProjectsProjectIdTemplatesTemplateIdDelete~~](#deletetemplateprojectsprojectidtemplatestemplateiddelete) - Delete Template :warning: **Deprecated**
* [~~createPromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost~~](#createprompttemplateversionprojectsprojectidtemplatestemplateidversionspost) - Create Prompt Template Version :warning: **Deprecated**
* [queryTemplatesTemplatesQueryPost](#querytemplatestemplatesquerypost) - Query Templates
* [queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost](#querytemplateversionstemplatestemplateidversionsquerypost) - Query Template Versions
* [~~getTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet~~](#gettemplateversionprojectsprojectidtemplatestemplateidversionsversionget) - Get Template Version :warning: **Deprecated**
* [~~setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut~~](#setselectedtemplateversionprojectsprojectidtemplatestemplateidversionsversionput) - Set Selected Template Version :warning: **Deprecated**
* [renderTemplateRenderTemplatePost](#rendertemplaterendertemplatepost) - Render Template
* [generateTemplateInputStubInputStubPost](#generatetemplateinputstubinputstubpost) - Generate Template Input Stub
* [createGlobalPromptTemplateTemplatesPost](#createglobalprompttemplatetemplatespost) - Create Global Prompt Template
* [bulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete](#bulkdeleteglobaltemplatestemplatesbulkdeletedelete) - Bulk Delete Global Templates
* [getGlobalTemplateTemplatesTemplateIdGet](#getglobaltemplatetemplatestemplateidget) - Get Global Template
* [updateGlobalTemplateTemplatesTemplateIdPatch](#updateglobaltemplatetemplatestemplateidpatch) - Update Global Template
* [deleteGlobalTemplateTemplatesTemplateIdDelete](#deleteglobaltemplatetemplatestemplateiddelete) - Delete Global Template
* [createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost](#createglobalprompttemplateversiontemplatestemplateidversionspost) - Create Global Prompt Template Version
* [getGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet](#getglobaltemplateversiontemplatestemplateidversionsversionget) - Get Global Template Version
* [setSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut](#setselectedglobaltemplateversiontemplatestemplateidversionsversionput) - Set Selected Global Template Version
* [createUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost](#createuserprompttemplatecollaboratorstemplatestemplateiduserspost) - Create User Prompt Template Collaborators
* [listUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet](#listuserprompttemplatecollaboratorstemplatestemplateidusersget) - List User Prompt Template Collaborators
* [updateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch](#updateuserprompttemplatecollaboratortemplatestemplateidusersuseridpatch) - Update User Prompt Template Collaborator
* [deleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete](#deleteuserprompttemplatecollaboratortemplatestemplateidusersuseriddelete) - Delete User Prompt Template Collaborator
* [createGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost](#creategroupprompttemplatecollaboratorstemplatestemplateidgroupspost) - Create Group Prompt Template Collaborators
* [listGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet](#listgroupprompttemplatecollaboratorstemplatestemplateidgroupsget) - List Group Prompt Template Collaborators
* [updateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch](#updategroupprompttemplatecollaboratortemplatestemplateidgroupsgroupidpatch) - Update Group Prompt Template Collaborator
* [deleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete](#deletegroupprompttemplatecollaboratortemplatestemplateidgroupsgroupiddelete) - Delete Group Prompt Template Collaborator
* [deleteScorerScorersScorerIdDelete](#deletescorerscorersscoreriddelete) - Delete Scorer
* [getScorerScorersScorerIdGet](#getscorerscorersscoreridget) - Get Scorer
* [updateScorersScorerIdPatch](#updatescorersscoreridpatch) - Update
* [validateCodeScorerScorersCodeValidatePost](#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
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
* [createScorersPost](#createscorerspost) - Create
* [createLlmScorerVersionScorersScorerIdVersionLlmPost](#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
* [validateCodeScorerLogRecordScorersCodeValidateLogRecordPost](#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
* [validateLlmScorerLogRecordScorersLlmValidateLogRecordPost](#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record
* [validateLlmScorerDatasetScorersLlmValidateDatasetPost](#validatellmscorerdatasetscorersllmvalidatedatasetpost) - Validate Llm Scorer Dataset
* [validateCodeScorerDatasetScorersCodeValidateDatasetPost](#validatecodescorerdatasetscorerscodevalidatedatasetpost) - Validate Code Scorer Dataset
* [computeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost](#computehealthscoreendpointprojectsprojectidmetricstestingrunidhealthscorepost) - Compute Health Score Endpoint

## createPromptTemplateWithVersionProjectsProjectIdTemplatesPost

For a given project, create a prompt template.

We first create a prompt template version, and then create a prompt template that
points to that version as the selected version.

Parameters
----------
project_id : UUID4
    Project ID.
create_request : CreatePromptTemplateWithVersionRequestBody, optional
    Request body, by default Body( ...,
        examples=
        [BasePromptTemplateVersion.test_data() | BasePromptTemplate.test_data()],
    )
db_read : Session, optional
    Session object to execute DB reads, by default Depends(get_db_read)

Returns
-------
CreatePromptTemplateResponse
    Details about the created prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_prompt_template_with_version_projects__project_id__templates_post" method="post" path="/projects/{project_id}/templates" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createPromptTemplateWithVersionProjectsProjectIdTemplatesPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      template: "<value>",
      name: "<value>",
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
import { promptsCreatePromptTemplateWithVersionProjectsProjectIdTemplatesPost } from "galileo-generated/funcs/promptsCreatePromptTemplateWithVersionProjectsProjectIdTemplatesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreatePromptTemplateWithVersionProjectsProjectIdTemplatesPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      template: "<value>",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreatePromptTemplateWithVersionProjectsProjectIdTemplatesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.CreatePromptTemplateWithVersionProjectsProjectIdTemplatesPostRequest](../../models/operations/createprompttemplatewithversionprojectsprojectidtemplatespostrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.CreatePromptTemplateWithVersionProjectsProjectIdTemplatesPostSecurity](../../models/operations/createprompttemplatewithversionprojectsprojectidtemplatespostsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getProjectTemplatesProjectsProjectIdTemplatesGet

Get all prompt templates for a project.

Parameters
----------
project_id : UUID4
    Project ID.
ctx : Context, optional
    User context with database session, by default Depends(get_user_context)

Returns
-------
List[GetTemplateResponse]
    List of prompt template responses.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_project_templates_projects__project_id__templates_get" method="get" path="/projects/{project_id}/templates" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getProjectTemplatesProjectsProjectIdTemplatesGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetProjectTemplatesProjectsProjectIdTemplatesGet } from "galileo-generated/funcs/promptsGetProjectTemplatesProjectsProjectIdTemplatesGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetProjectTemplatesProjectsProjectIdTemplatesGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetProjectTemplatesProjectsProjectIdTemplatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectTemplatesProjectsProjectIdTemplatesGetRequest](../../models/operations/getprojecttemplatesprojectsprojectidtemplatesgetrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetProjectTemplatesProjectsProjectIdTemplatesGetSecurity](../../models/operations/getprojecttemplatesprojectsprojectidtemplatesgetsecurity.md)                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BasePromptTemplateResponse[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet

Get a prompt template from a project.

Parameters
----------
project_id : UUID4
    Prokect ID.
template_name : str
    Prompt template name.
version : Optional[int]
    Version number to fetch. defaults to selected version.
ctx : Context, optional
    User context with database session, by default Depends(get_user_context).


Returns
-------
GetTemplateResponse
    Prompt template response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_template_version_by_name_projects__project_id__templates_versions_get" method="get" path="/projects/{project_id}/templates/versions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet } from "galileo-generated/funcs/promptsGetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGetRequest](../../models/operations/gettemplateversionbynameprojectsprojectidtemplatesversionsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.GetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGetSecurity](../../models/operations/gettemplateversionbynameprojectsprojectidtemplatesversionsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.BasePromptTemplateVersionResponse](../../models/baseprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~getTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet~~

Get a prompt template from a project.

Parameters
----------
template_id : UUID4
    Prompt template ID.
project_id : UUID4
    Project ID.
ctx : Context, optional
    User context with database session, by default Depends(get_user_context).

Returns
-------
GetTemplateResponse
    Prompt template response.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_template_from_project_projects__project_id__templates__template_id__get" method="get" path="/projects/{project_id}/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    projectId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet } from "galileo-generated/funcs/promptsGetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGetRequest](../../models/operations/gettemplatefromprojectprojectsprojectidtemplatestemplateidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.GetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGetSecurity](../../models/operations/gettemplatefromprojectprojectsprojectidtemplatestemplateidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~deleteTemplateProjectsProjectIdTemplatesTemplateIdDelete~~

Delete Template

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_template_projects__project_id__templates__template_id__delete" method="delete" path="/projects/{project_id}/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.deleteTemplateProjectsProjectIdTemplatesTemplateIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    projectId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsDeleteTemplateProjectsProjectIdTemplatesTemplateIdDelete } from "galileo-generated/funcs/promptsDeleteTemplateProjectsProjectIdTemplatesTemplateIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsDeleteTemplateProjectsProjectIdTemplatesTemplateIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsDeleteTemplateProjectsProjectIdTemplatesTemplateIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTemplateProjectsProjectIdTemplatesTemplateIdDeleteRequest](../../models/operations/deletetemplateprojectsprojectidtemplatestemplateiddeleterequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteTemplateProjectsProjectIdTemplatesTemplateIdDeleteSecurity](../../models/operations/deletetemplateprojectsprojectidtemplatestemplateiddeletesecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeletePromptResponse](../../models/deletepromptresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~createPromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost~~

Create a prompt template version for a given prompt template.

Parameters
----------
project_id : UUID4
    Project ID.
template_id : UUID4
    Prompt template ID.
body : dict, optional
    Body of the request, by default Body( ...,
        examples=[CreatePromptTemplateVersionRequest.test_data()],
    )
db_read : Session, optional
    Database session, by default Depends(get_db_read)

Returns
-------
BasePromptTemplateVersionResponse
    Response with details about the created prompt template version.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_prompt_template_version_projects__project_id__templates__template_id__versions_post" method="post" path="/projects/{project_id}/templates/{template_id}/versions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createPromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateId: "<value>",
    body: {
      template: [
        {
          content: "<value>",
          role: "<value>",
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
import {
  promptsCreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost,
} from "galileo-generated/funcs/promptsCreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateId: "<value>",
    body: {
      template: [
        {
          content: "<value>",
          role: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.CreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPostRequest](../../models/operations/createprompttemplateversionprojectsprojectidtemplatestemplateidversionspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `security`                                                                                                                                                                                                       | [operations.CreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPostSecurity](../../models/operations/createprompttemplateversionprojectsprojectidtemplatestemplateidversionspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[models.BasePromptTemplateVersionResponse](../../models/baseprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryTemplatesTemplatesQueryPost

Query prompt templates the user has access to.

Parameters
----------
params : ListPromptTemplateParams
    Query parameters for filtering and sorting
pagination : PaginationRequestMixin
    Pagination parameters
ctx : Context
    User context containing database session and user information

Returns
-------
ListPromptTemplateResponse
    Paginated list of prompt template responses that the user has access to.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_templates_templates_query_post" method="post" path="/templates/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.queryTemplatesTemplatesQueryPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsQueryTemplatesTemplatesQueryPost } from "galileo-generated/funcs/promptsQueryTemplatesTemplatesQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsQueryTemplatesTemplatesQueryPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsQueryTemplatesTemplatesQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryTemplatesTemplatesQueryPostRequest](../../models/operations/querytemplatestemplatesquerypostrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryTemplatesTemplatesQueryPostSecurity](../../models/operations/querytemplatestemplatesquerypostsecurity.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListPromptTemplateResponse](../../models/listprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost

Query versions of a specific prompt template.

Parameters
----------
template_id : UUID4
    ID of the template to query versions for
params : ListPromptTemplateVersionParams
    Query parameters for filtering and sorting
pagination : PaginationRequestMixin
    Pagination parameters
ctx : Context
    User context containing database session and user information

Returns
-------
ListPromptTemplateVersionResponse
    Paginated list of template version responses

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_template_versions_templates__template_id__versions_query_post" method="post" path="/templates/{template_id}/versions/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsQueryTemplateVersionsTemplatesTemplateIdVersionsQueryPost } from "galileo-generated/funcs/promptsQueryTemplateVersionsTemplatesTemplateIdVersionsQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsQueryTemplateVersionsTemplatesTemplateIdVersionsQueryPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsQueryTemplateVersionsTemplatesTemplateIdVersionsQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryTemplateVersionsTemplatesTemplateIdVersionsQueryPostRequest](../../models/operations/querytemplateversionstemplatestemplateidversionsquerypostrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryTemplateVersionsTemplatesTemplateIdVersionsQueryPostSecurity](../../models/operations/querytemplateversionstemplatestemplateidversionsquerypostsecurity.md)   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListPromptTemplateVersionResponse](../../models/listprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~getTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet~~

Get a specific version of a prompt template.

Parameters
----------
template_id : UUID4
    Template ID.
version : int
    Version number to fetch.
ctx : Context, optional
    User context with database session, by default Depends(get_user_context)

Returns
-------
BasePromptTemplateVersionResponse
    Prompt template version response.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_template_version_projects__project_id__templates__template_id__versions__version__get" method="get" path="/projects/{project_id}/templates/{template_id}/versions/{version}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 865969,
    projectId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet } from "galileo-generated/funcs/promptsGetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 865969,
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.GetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGetRequest](../../models/operations/gettemplateversionprojectsprojectidtemplatestemplateidversionsversiongetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `security`                                                                                                                                                                                                 | [operations.GetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGetSecurity](../../models/operations/gettemplateversionprojectsprojectidtemplatestemplateidversionsversiongetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[models.BasePromptTemplateVersionResponse](../../models/baseprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut~~

Set Selected Template Version

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_selected_template_version_projects__project_id__templates__template_id__versions__version__put" method="put" path="/projects/{project_id}/templates/{template_id}/versions/{version}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateId: "<value>",
    version: 588368,
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
  promptsSetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut,
} from "galileo-generated/funcs/promptsSetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsSetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    templateId: "<value>",
    version: 588368,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsSetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.SetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPutRequest](../../models/operations/setselectedtemplateversionprojectsprojectidtemplatestemplateidversionsversionputrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                 | [operations.SetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPutSecurity](../../models/operations/setselectedtemplateversionprojectsprojectidtemplatestemplateidversionsversionputsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## renderTemplateRenderTemplatePost

Render Template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="render_template_render_template_post" method="post" path="/render_template" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.renderTemplateRenderTemplatePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      template: "<value>",
      data: {
        datasetId: "<value>",
      },
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
import { promptsRenderTemplateRenderTemplatePost } from "galileo-generated/funcs/promptsRenderTemplateRenderTemplatePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsRenderTemplateRenderTemplatePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      template: "<value>",
      data: {
        datasetId: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsRenderTemplateRenderTemplatePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RenderTemplateRenderTemplatePostRequest](../../models/operations/rendertemplaterendertemplatepostrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RenderTemplateRenderTemplatePostSecurity](../../models/operations/rendertemplaterendertemplatepostsecurity.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RenderTemplateResponse](../../models/rendertemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## generateTemplateInputStubInputStubPost

Generate Template Input Stub

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generate_template_input_stub_input_stub_post" method="post" path="/input_stub" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.generateTemplateInputStubInputStubPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templates: [
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
import { promptsGenerateTemplateInputStubInputStubPost } from "galileo-generated/funcs/promptsGenerateTemplateInputStubInputStubPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGenerateTemplateInputStubInputStubPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templates: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGenerateTemplateInputStubInputStubPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.TemplateStubRequest](../../models/templatestubrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GenerateTemplateInputStubInputStubPostSecurity](../../models/operations/generatetemplateinputstubinputstubpostsecurity.md)                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## createGlobalPromptTemplateTemplatesPost

Create a global prompt template.

Parameters
----------
ctx : Context
    Request context including authentication information
create_request : CreatePromptTemplateWithVersionRequestBody
    Request body containing template name and content
principal : Principal
    Principal object.

Returns
-------
BasePromptTemplateResponse
    Details about the created prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_global_prompt_template_templates_post" method="post" path="/templates" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createGlobalPromptTemplateTemplatesPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      template: "<value>",
      name: {
        value: "<value>",
        appendSuffixIfDuplicate: false,
      },
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
import { promptsCreateGlobalPromptTemplateTemplatesPost } from "galileo-generated/funcs/promptsCreateGlobalPromptTemplateTemplatesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateGlobalPromptTemplateTemplatesPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      template: "<value>",
      name: {
        value: "<value>",
        appendSuffixIfDuplicate: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateGlobalPromptTemplateTemplatesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGlobalPromptTemplateTemplatesPostRequest](../../models/operations/createglobalprompttemplatetemplatespostrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateGlobalPromptTemplateTemplatesPostSecurity](../../models/operations/createglobalprompttemplatetemplatespostsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## bulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete

Delete multiple global prompt templates in bulk.

This endpoint allows efficient deletion of multiple global prompt templates at once.
It validates permissions for each template in the service and provides detailed feedback about
successful and failed deletions for each template.

Parameters
----------
delete_request : BulkDeletePromptTemplatesRequest
    Request containing list of template IDs to delete (max 100)
ctx : Context
    Request context including authentication information

Returns
-------
BulkDeletePromptTemplatesResponse
    Details about the bulk deletion operation including:
    - Number of successfully deleted templates
    - List of failed deletions with reasons
    - Summary message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_delete_global_templates_templates_bulk_delete_delete" method="delete" path="/templates/bulk_delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.bulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateIds: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsBulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete } from "galileo-generated/funcs/promptsBulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsBulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateIds: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsBulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BulkDeletePromptTemplatesRequest](../../models/bulkdeleteprompttemplatesrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.BulkDeleteGlobalTemplatesTemplatesBulkDeleteDeleteSecurity](../../models/operations/bulkdeleteglobaltemplatestemplatesbulkdeletedeletesecurity.md)                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BulkDeletePromptTemplatesResponse](../../models/bulkdeleteprompttemplatesresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getGlobalTemplateTemplatesTemplateIdGet

Get a global prompt template given a template ID.

Parameters
----------
template_id : UUID4
    Prompt template id.
ctx : Context
    Request context including authentication information
principal : Principal
    Principal object.

Returns
-------
BasePromptTemplateResponse
    Details about the created prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_global_template_templates__template_id__get" method="get" path="/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getGlobalTemplateTemplatesTemplateIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetGlobalTemplateTemplatesTemplateIdGet } from "galileo-generated/funcs/promptsGetGlobalTemplateTemplatesTemplateIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetGlobalTemplateTemplatesTemplateIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetGlobalTemplateTemplatesTemplateIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGlobalTemplateTemplatesTemplateIdGetRequest](../../models/operations/getglobaltemplatetemplatestemplateidgetrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetGlobalTemplateTemplatesTemplateIdGetSecurity](../../models/operations/getglobaltemplatetemplatestemplateidgetsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateGlobalTemplateTemplatesTemplateIdPatch

Update a global prompt template.

Parameters
----------
update_template_request : UpdatePromptTemplateRequest
    Request containing the fields to update.
template : PromptTemplate
    Prompt template to update.
principal : Principal
    Principal object.
ctx : Context
    Request context including authentication information.

Returns
-------
BasePromptTemplateResponse
    Updated prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_global_template_templates__template_id__patch" method="patch" path="/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.updateGlobalTemplateTemplatesTemplateIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
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
import { promptsUpdateGlobalTemplateTemplatesTemplateIdPatch } from "galileo-generated/funcs/promptsUpdateGlobalTemplateTemplatesTemplateIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsUpdateGlobalTemplateTemplatesTemplateIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsUpdateGlobalTemplateTemplatesTemplateIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGlobalTemplateTemplatesTemplateIdPatchRequest](../../models/operations/updateglobaltemplatetemplatestemplateidpatchrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateGlobalTemplateTemplatesTemplateIdPatchSecurity](../../models/operations/updateglobaltemplatetemplatestemplateidpatchsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteGlobalTemplateTemplatesTemplateIdDelete

Delete a global prompt template given a template ID.

Parameters
----------
template_id : UUID4
    Prompt template id.
ctx : Context
    Request context including authentication information

Returns
-------
DeletePromptResponse
    Message indicating the prompt template was deleted.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_global_template_templates__template_id__delete" method="delete" path="/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.deleteGlobalTemplateTemplatesTemplateIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsDeleteGlobalTemplateTemplatesTemplateIdDelete } from "galileo-generated/funcs/promptsDeleteGlobalTemplateTemplatesTemplateIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsDeleteGlobalTemplateTemplatesTemplateIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsDeleteGlobalTemplateTemplatesTemplateIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGlobalTemplateTemplatesTemplateIdDeleteRequest](../../models/operations/deleteglobaltemplatetemplatestemplateiddeleterequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteGlobalTemplateTemplatesTemplateIdDeleteSecurity](../../models/operations/deleteglobaltemplatetemplatestemplateiddeletesecurity.md)                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DeletePromptResponse](../../models/deletepromptresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost

Create a prompt template version for a given prompt template.

Parameters
----------
template_id : UUID4
    Prompt template ID.
ctx : Context
    Request context including authentication information
base_prompt_template_version : BasePromptTemplateVersion
    Version details to create

Returns
-------
BasePromptTemplateVersionResponse
    Response with details about the created prompt template version.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_global_prompt_template_version_templates__template_id__versions_post" method="post" path="/templates/{template_id}/versions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: {
      template: [
        {
          content: "<value>",
          role: "tool",
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
import { promptsCreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost } from "galileo-generated/funcs/promptsCreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: {
      template: [
        {
          content: "<value>",
          role: "tool",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.CreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPostRequest](../../models/operations/createglobalprompttemplateversiontemplatestemplateidversionspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.CreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPostSecurity](../../models/operations/createglobalprompttemplateversiontemplatestemplateidversionspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.BasePromptTemplateVersionResponse](../../models/baseprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet

Get a global prompt template version given a template ID and version number.

Parameters
----------
template_id : UUID4
    Prompt template id.
version : int
    Version number.
ctx : Context
    Request context including authentication information

Returns
-------
BasePromptTemplateVersionResponse
    Details about the prompt template version.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_global_template_version_templates__template_id__versions__version__get" method="get" path="/templates/{template_id}/versions/{version}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.getGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 139301,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsGetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet } from "galileo-generated/funcs/promptsGetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsGetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 139301,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsGetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGetRequest](../../models/operations/getglobaltemplateversiontemplatestemplateidversionsversiongetrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.GetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGetSecurity](../../models/operations/getglobaltemplateversiontemplatestemplateidversionsversiongetsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.BasePromptTemplateVersionResponse](../../models/baseprompttemplateversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## setSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut

Set a global prompt template version as the selected version.

Parameters
----------
template_id : UUID4
    Prompt template id.
version : int
    Version number.
ctx : Context
    Request context including authentication information

Returns
-------
BasePromptTemplateResponse
    Details about the prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_selected_global_template_version_templates__template_id__versions__version__put" method="put" path="/templates/{template_id}/versions/{version}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.setSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 239630,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsSetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut } from "galileo-generated/funcs/promptsSetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsSetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    version: 239630,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsSetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.SetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPutRequest](../../models/operations/setselectedglobaltemplateversiontemplatestemplateidversionsversionputrequest.md)   | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `security`                                                                                                                                                                                           | [operations.SetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPutSecurity](../../models/operations/setselectedglobaltemplateversiontemplatestemplateidversionsversionputsecurity.md) | :heavy_check_mark:                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[models.BasePromptTemplateResponse](../../models/baseprompttemplateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost

Create User Prompt Template Collaborators

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_user_prompt_template_collaborators_templates__template_id__users_post" method="post" path="/templates/{template_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: [
      {
        userId: "<value>",
      },
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
import { promptsCreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost } from "galileo-generated/funcs/promptsCreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: [
      {
        userId: "<value>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.CreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPostRequest](../../models/operations/createuserprompttemplatecollaboratorstemplatestemplateiduserspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.CreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPostSecurity](../../models/operations/createuserprompttemplatecollaboratorstemplatestemplateiduserspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[models.UserCollaborator[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet

List the users with which the prompt template has been shared.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_user_prompt_template_collaborators_templates__template_id__users_get" method="get" path="/templates/{template_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.listUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet } from "galileo-generated/funcs/promptsListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.ListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGetRequest](../../models/operations/listuserprompttemplatecollaboratorstemplatestemplateidusersgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.ListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGetSecurity](../../models/operations/listuserprompttemplatecollaboratorstemplatestemplateidusersgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.ListUserCollaboratorsResponse](../../models/listusercollaboratorsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch

Update the sharing permissions of a user on a prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_user_prompt_template_collaborator_templates__template_id__users__user_id__patch" method="patch" path="/templates/{template_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.updateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    userId: "<value>",
    body: {
      role: "annotator",
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
import { promptsUpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch } from "galileo-generated/funcs/promptsUpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsUpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    userId: "<value>",
    body: {
      role: "annotator",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsUpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.UpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatchRequest](../../models/operations/updateuserprompttemplatecollaboratortemplatestemplateidusersuseridpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.UpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatchSecurity](../../models/operations/updateuserprompttemplatecollaboratortemplatestemplateidusersuseridpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[models.UserCollaborator](../../models/usercollaborator.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete

Remove a user's access to a prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_user_prompt_template_collaborator_templates__template_id__users__user_id__delete" method="delete" path="/templates/{template_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.deleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    userId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsDeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete } from "galileo-generated/funcs/promptsDeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsDeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsDeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.DeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDeleteRequest](../../models/operations/deleteuserprompttemplatecollaboratortemplatestemplateidusersuseriddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `security`                                                                                                                                                                                                 | [operations.DeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDeleteSecurity](../../models/operations/deleteuserprompttemplatecollaboratortemplatestemplateidusersuseriddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost

Share a prompt template with groups.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_group_prompt_template_collaborators_templates__template_id__groups_post" method="post" path="/templates/{template_id}/groups" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsCreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost } from "galileo-generated/funcs/promptsCreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsCreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    body: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsCreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.CreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPostRequest](../../models/operations/creategroupprompttemplatecollaboratorstemplatestemplateidgroupspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `security`                                                                                                                                                                                       | [operations.CreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPostSecurity](../../models/operations/creategroupprompttemplatecollaboratorstemplatestemplateidgroupspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[models.GroupCollaborator[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet

List the groups with which the prompt template has been shared.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_group_prompt_template_collaborators_templates__template_id__groups_get" method="get" path="/templates/{template_id}/groups" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.listGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet } from "galileo-generated/funcs/promptsListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.ListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGetRequest](../../models/operations/listgroupprompttemplatecollaboratorstemplatestemplateidgroupsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.ListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGetSecurity](../../models/operations/listgroupprompttemplatecollaboratorstemplatestemplateidgroupsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.ListGroupCollaboratorsResponse](../../models/listgroupcollaboratorsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch

Update the sharing permissions of a group on a prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_group_prompt_template_collaborator_templates__template_id__groups__group_id__patch" method="patch" path="/templates/{template_id}/groups/{group_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.updateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    groupId: "<value>",
    body: {
      role: "editor",
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
import {
  promptsUpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch,
} from "galileo-generated/funcs/promptsUpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsUpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    groupId: "<value>",
    body: {
      role: "editor",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsUpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.UpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatchRequest](../../models/operations/updategroupprompttemplatecollaboratortemplatestemplateidgroupsgroupidpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.UpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatchSecurity](../../models/operations/updategroupprompttemplatecollaboratortemplatestemplateidgroupsgroupidpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[models.GroupCollaborator](../../models/groupcollaborator.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete

Remove a group's access to a prompt template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_group_prompt_template_collaborator_templates__template_id__groups__group_id__delete" method="delete" path="/templates/{template_id}/groups/{group_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.deleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    groupId: "<value>",
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
  promptsDeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete,
} from "galileo-generated/funcs/promptsDeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsDeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    groupId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsDeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.DeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDeleteRequest](../../models/operations/deletegroupprompttemplatecollaboratortemplatestemplateidgroupsgroupiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `security`                                                                                                                                                                                                       | [operations.DeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDeleteSecurity](../../models/operations/deletegroupprompttemplatecollaboratortemplatestemplateidgroupsgroupiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

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
  const result = await galileoGenerated.prompts.deleteScorerScorersScorerIdDelete({
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
  const result = await galileoGenerated.prompts.getScorerScorersScorerIdGet({
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

## updateScorersScorerIdPatch

Update

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_scorers__scorer_id__patch" method="patch" path="/scorers/{scorer_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.updateScorersScorerIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      defaults: {
        filters: [
          {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
        ],
      },
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
import { promptsUpdateScorersScorerIdPatch } from "galileo-generated/funcs/promptsUpdateScorersScorerIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsUpdateScorersScorerIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    scorerId: "<value>",
    body: {
      defaults: {
        filters: [
          {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
        ],
      },
    },
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

## validateCodeScorerScorersCodeValidatePost

Validate a code scorer with optional simple input/output test.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_code_scorer_scorers_code_validate_post" method="post" path="/scorers/code/validate" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.validateCodeScorerScorersCodeValidatePost({
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
  const result = await galileoGenerated.prompts.getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet({
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
  const result = await galileoGenerated.prompts.createCodeScorerVersionScorersScorerIdVersionCodePost({
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
  const result = await galileoGenerated.prompts.getScorerVersionCodeScorersScorerIdVersionCodeGet({
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
  const result = await galileoGenerated.prompts.createPresetScorerVersionScorersScorerIdVersionPresetPost({
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
  const result = await galileoGenerated.prompts.createLunaScorerVersionScorersScorerIdVersionLunaPost({
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
  const result = await galileoGenerated.prompts.listScorersWithFiltersScorersListPost({
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
  const result = await galileoGenerated.prompts.listTagsScorersTagsGet({
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
  const result = await galileoGenerated.prompts.getScorerVersionOrLatestScorersScorerIdVersionGet({
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
  const result = await galileoGenerated.prompts.listAllVersionsForScorerScorersScorerIdVersionsGet({
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
  const result = await galileoGenerated.prompts.listProjectsForScorerRouteScorersScorerIdProjectsGet({
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
  const result = await galileoGenerated.prompts.listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet({
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
  const result = await galileoGenerated.prompts.restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost({
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
  const result = await galileoGenerated.prompts.autogenLlmScorerScorersLlmAutogenPost({
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
  const result = await galileoGenerated.prompts.manualLlmValidateScorersLlmValidatePost({
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

## createScorersPost

Create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_scorers_post" method="post" path="/scorers" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createScorersPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    name: "<value>",
    defaults: {
      filters: [
        {
          name: "metadata",
          operator: "one_of",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
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
    defaults: {
      filters: [
        {
          name: "metadata",
          operator: "one_of",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
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

## createLlmScorerVersionScorersScorerIdVersionLlmPost

Create Llm Scorer Version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_llm_scorer_version_scorers__scorer_id__version_llm_post" method="post" path="/scorers/{scorer_id}/version/llm" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.createLlmScorerVersionScorersScorerIdVersionLlmPost({
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

## validateCodeScorerLogRecordScorersCodeValidateLogRecordPost

Validate a code scorer using actual log records.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_code_scorer_log_record_scorers_code_validate_log_record_post" method="post" path="/scorers/code/validate/log_record" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.validateCodeScorerLogRecordScorersCodeValidateLogRecordPost({
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

## validateLlmScorerLogRecordScorersLlmValidateLogRecordPost

Validate Llm Scorer Log Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_llm_scorer_log_record_scorers_llm_validate_log_record_post" method="post" path="/scorers/llm/validate/log_record" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.validateLlmScorerLogRecordScorersLlmValidateLogRecordPost({
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

## validateLlmScorerDatasetScorersLlmValidateDatasetPost

Validate Llm Scorer Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_llm_scorer_dataset_scorers_llm_validate_dataset_post" method="post" path="/scorers/llm/validate/dataset" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.validateLlmScorerDatasetScorersLlmValidateDatasetPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    query: "<value>",
    response: "<value>",
    chainPollTemplate: {
      template: "<value>",
    },
    scorerConfiguration: {},
    userPrompt: "<value>",
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsValidateLlmScorerDatasetScorersLlmValidateDatasetPost } from "galileo-generated/funcs/promptsValidateLlmScorerDatasetScorersLlmValidateDatasetPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsValidateLlmScorerDatasetScorersLlmValidateDatasetPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    query: "<value>",
    response: "<value>",
    chainPollTemplate: {
      template: "<value>",
    },
    scorerConfiguration: {},
    userPrompt: "<value>",
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsValidateLlmScorerDatasetScorersLlmValidateDatasetPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ValidateLLMScorerDatasetRequest](../../models/validatellmscorerdatasetrequest.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ValidateLlmScorerDatasetScorersLlmValidateDatasetPostSecurity](../../models/operations/validatellmscorerdatasetscorersllmvalidatedatasetpostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ValidateLLMScorerDatasetResponse](../../models/validatellmscorerdatasetresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## validateCodeScorerDatasetScorersCodeValidateDatasetPost

Validate a code scorer against dataset rows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="validate_code_scorer_dataset_scorers_code_validate_dataset_post" method="post" path="/scorers/code/validate/dataset" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.validateCodeScorerDatasetScorersCodeValidateDatasetPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
    datasetId: "7060d7e5-816f-4c57-bb2f-63dadd7c422e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { promptsValidateCodeScorerDatasetScorersCodeValidateDatasetPost } from "galileo-generated/funcs/promptsValidateCodeScorerDatasetScorersCodeValidateDatasetPost.js";
import { openAsBlob } from "node:fs";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsValidateCodeScorerDatasetScorersCodeValidateDatasetPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    file: await openAsBlob("example.file"),
    datasetId: "7060d7e5-816f-4c57-bb2f-63dadd7c422e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsValidateCodeScorerDatasetScorersCodeValidateDatasetPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BodyValidateCodeScorerDatasetScorersCodeValidateDatasetPost](../../models/bodyvalidatecodescorerdatasetscorerscodevalidatedatasetpost.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ValidateCodeScorerDatasetScorersCodeValidateDatasetPostSecurity](../../models/operations/validatecodescorerdatasetscorerscodevalidatedatasetpostsecurity.md)       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ValidateCodeScorerDatasetResponse](../../models/validatecodescorerdatasetresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## computeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost

Compute the health score metric for a metrics testing run.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="compute_health_score_endpoint_projects__project_id__metrics_testing__run_id__health_score_post" method="post" path="/projects/{project_id}/metrics-testing/{run_id}/health-score" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.prompts.computeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorerId: "<value>",
      outputType: "count",
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
import {
  promptsComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost,
} from "galileo-generated/funcs/promptsComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await promptsComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorerId: "<value>",
      outputType: "count",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("promptsComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.ComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePostRequest](../../models/operations/computehealthscoreendpointprojectsprojectidmetricstestingrunidhealthscorepostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `security`                                                                                                                                                                                                           | [operations.ComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePostSecurity](../../models/operations/computehealthscoreendpointprojectsprojectidmetricstestingrunidhealthscorepostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                    |
| `options`                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                       |
| `options.retries`                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                     |

### Response

**Promise\<[models.HealthScoreResult](../../models/healthscoreresult.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |