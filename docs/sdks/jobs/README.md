# Jobs

## Overview

### Available Operations

* [createJobJobsPost](#createjobjobspost) - Create Job
* [getJobJobsJobIdGet](#getjobjobsjobidget) - Get Job
* [getJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet](#getjobsforprojectrunprojectsprojectidrunsrunidjobsget) - Get Jobs For Project Run
* [getLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet](#getlatestjobforprojectrunprojectsprojectidrunsrunidjobslatestget) - Get Latest Job For Project Run

## createJobJobsPost

Create Job

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_job_jobs_post" method="post" path="/jobs" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.jobs.createJobJobsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { jobsCreateJobJobsPost } from "galileo-generated/funcs/jobsCreateJobJobsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await jobsCreateJobJobsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsCreateJobJobsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateJobRequest](../../models/createjobrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateJobJobsPostSecurity](../../models/operations/createjobjobspostsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateJobResponse](../../models/createjobresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getJobJobsJobIdGet

Get a job by id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_job_jobs__job_id__get" method="get" path="/jobs/{job_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.jobs.getJobJobsJobIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    jobId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { jobsGetJobJobsJobIdGet } from "galileo-generated/funcs/jobsGetJobJobsJobIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await jobsGetJobJobsJobIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    jobId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsGetJobJobsJobIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobJobsJobIdGetRequest](../../models/operations/getjobjobsjobidgetrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetJobJobsJobIdGetSecurity](../../models/operations/getjobjobsjobidgetsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.JobDB](../../models/jobdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet

Get all jobs by for a project and run.

Returns them in order of creation from newest to oldest.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_jobs_for_project_run_projects__project_id__runs__run_id__jobs_get" method="get" path="/projects/{project_id}/runs/{run_id}/jobs" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.jobs.getJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { jobsGetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet } from "galileo-generated/funcs/jobsGetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await jobsGetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsGetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGetRequest](../../models/operations/getjobsforprojectrunprojectsprojectidrunsrunidjobsgetrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGetSecurity](../../models/operations/getjobsforprojectrunprojectsprojectidrunsrunidjobsgetsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.JobDB[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet

Returns the most recently updated job for a run.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_job_for_project_run_projects__project_id__runs__run_id__jobs_latest_get" method="get" path="/projects/{project_id}/runs/{run_id}/jobs/latest" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.jobs.getLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { jobsGetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet } from "galileo-generated/funcs/jobsGetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await jobsGetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsGetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.GetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGetRequest](../../models/operations/getlatestjobforprojectrunprojectsprojectidrunsrunidjobslatestgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.GetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGetSecurity](../../models/operations/getlatestjobforprojectrunprojectsprojectidrunsrunidjobslatestgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.JobDB](../../models/jobdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |