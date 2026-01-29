# galileo-generated

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *galileo-generated* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=galileo-generated&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/galileo-ai/ts-sdk). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [galileo-generated](#galileo-generated)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

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
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme  | Environment Variable              |
| -------------- | ------ | ------- | --------------------------------- |
| `apiKeyHeader` | apiKey | API key | `GALILEOGENERATED_API_KEY_HEADER` |

To authenticate with the API the `apiKeyHeader` parameter must be set when initializing the SDK client instance. For example:
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.createDatasetDatasetsPost(
    {},
    {},
  );

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Auth](docs/sdks/auth/README.md)

* [loginEmailLoginPost](docs/sdks/auth/README.md#loginemailloginpost) - Login Email
* [loginApiKeyLoginApiKeyPost](docs/sdks/auth/README.md#loginapikeyloginapikeypost) - Login Api Key

### [Data](docs/sdks/data/README.md)

* [createScorersPost](docs/sdks/data/README.md#createscorerspost) - Create
* [updateScorersScorerIdPatch](docs/sdks/data/README.md#updatescorersscoreridpatch) - Update
* [deleteScorerScorersScorerIdDelete](docs/sdks/data/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
* [getScorerScorersScorerIdGet](docs/sdks/data/README.md#getscorerscorersscoreridget) - Get Scorer
* [createLlmScorerVersionScorersScorerIdVersionLlmPost](docs/sdks/data/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
* [validateCodeScorerScorersCodeValidatePost](docs/sdks/data/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
* [validateCodeScorerLogRecordScorersCodeValidateLogRecordPost](docs/sdks/data/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
* [getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet](docs/sdks/data/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
* [createCodeScorerVersionScorersScorerIdVersionCodePost](docs/sdks/data/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
* [getScorerVersionCodeScorersScorerIdVersionCodeGet](docs/sdks/data/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
* [createPresetScorerVersionScorersScorerIdVersionPresetPost](docs/sdks/data/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
* [createLunaScorerVersionScorersScorerIdVersionLunaPost](docs/sdks/data/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
* [listScorersWithFiltersScorersListPost](docs/sdks/data/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
* [listTagsScorersTagsGet](docs/sdks/data/README.md#listtagsscorerstagsget) - List Tags
* [getScorerVersionOrLatestScorersScorerIdVersionGet](docs/sdks/data/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
* [listAllVersionsForScorerScorersScorerIdVersionsGet](docs/sdks/data/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
* [listProjectsForScorerRouteScorersScorerIdProjectsGet](docs/sdks/data/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
* [listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet](docs/sdks/data/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
* [restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost](docs/sdks/data/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
* [autogenLlmScorerScorersLlmAutogenPost](docs/sdks/data/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
* [manualLlmValidateScorersLlmValidatePost](docs/sdks/data/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
* [validateLlmScorerLogRecordScorersLlmValidateLogRecordPost](docs/sdks/data/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record

### [Datasets](docs/sdks/datasets/README.md)

* [~~uploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost~~](docs/sdks/datasets/README.md#uploadpromptevaluationdatasetprojectsprojectidpromptdatasetspost) - Upload Prompt Evaluation Dataset :warning: **Deprecated**
* [~~listPromptDatasetsProjectsProjectIdPromptDatasetsGet~~](docs/sdks/datasets/README.md#listpromptdatasetsprojectsprojectidpromptdatasetsget) - List Prompt Datasets :warning: **Deprecated**
* [createDatasetDatasetsPost](docs/sdks/datasets/README.md#createdatasetdatasetspost) - Create Dataset
* [listDatasetsDatasetsGet](docs/sdks/datasets/README.md#listdatasetsdatasetsget) - List Datasets
* [bulkDeleteDatasetsDatasetsBulkDeleteDelete](docs/sdks/datasets/README.md#bulkdeletedatasetsdatasetsbulkdeletedelete) - Bulk Delete Datasets
* [getDatasetDatasetsDatasetIdGet](docs/sdks/datasets/README.md#getdatasetdatasetsdatasetidget) - Get Dataset
* [updateDatasetDatasetsDatasetIdPatch](docs/sdks/datasets/README.md#updatedatasetdatasetsdatasetidpatch) - Update Dataset
* [deleteDatasetDatasetsDatasetIdDelete](docs/sdks/datasets/README.md#deletedatasetdatasetsdatasetiddelete) - Delete Dataset
* [queryDatasetsDatasetsQueryPost](docs/sdks/datasets/README.md#querydatasetsdatasetsquerypost) - Query Datasets
* [~~updatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut~~](docs/sdks/datasets/README.md#updatepromptdatasetprojectsprojectidpromptdatasetsdatasetidput) - Update Prompt Dataset :warning: **Deprecated**
* [~~deletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete~~](docs/sdks/datasets/README.md#deletepromptdatasetprojectsprojectidpromptdatasetsdatasetiddelete) - Delete Prompt Dataset :warning: **Deprecated**
* [~~downloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet~~](docs/sdks/datasets/README.md#downloadpromptdatasetprojectsprojectidpromptdatasetsdatasetidget) - Download Prompt Dataset :warning: **Deprecated**
* [updateDatasetContentDatasetsDatasetIdContentPatch](docs/sdks/datasets/README.md#updatedatasetcontentdatasetsdatasetidcontentpatch) - Update Dataset Content
* [getDatasetContentDatasetsDatasetIdContentGet](docs/sdks/datasets/README.md#getdatasetcontentdatasetsdatasetidcontentget) - Get Dataset Content
* [upsertDatasetContentDatasetsDatasetIdContentPut](docs/sdks/datasets/README.md#upsertdatasetcontentdatasetsdatasetidcontentput) - Upsert Dataset Content
* [downloadDatasetDatasetsDatasetIdDownloadGet](docs/sdks/datasets/README.md#downloaddatasetdatasetsdatasetiddownloadget) - Download Dataset
* [previewDatasetDatasetsDatasetIdPreviewPost](docs/sdks/datasets/README.md#previewdatasetdatasetsdatasetidpreviewpost) - Preview Dataset
* [queryDatasetContentDatasetsDatasetIdContentQueryPost](docs/sdks/datasets/README.md#querydatasetcontentdatasetsdatasetidcontentquerypost) - Query Dataset Content
* [createUserDatasetCollaboratorsDatasetsDatasetIdUsersPost](docs/sdks/datasets/README.md#createuserdatasetcollaboratorsdatasetsdatasetiduserspost) - Create User Dataset Collaborators
* [listUserDatasetCollaboratorsDatasetsDatasetIdUsersGet](docs/sdks/datasets/README.md#listuserdatasetcollaboratorsdatasetsdatasetidusersget) - List User Dataset Collaborators
* [createGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost](docs/sdks/datasets/README.md#creategroupdatasetcollaboratorsdatasetsdatasetidgroupspost) - Create Group Dataset Collaborators
* [listGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet](docs/sdks/datasets/README.md#listgroupdatasetcollaboratorsdatasetsdatasetidgroupsget) - List Group Dataset Collaborators
* [updateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch](docs/sdks/datasets/README.md#updateuserdatasetcollaboratordatasetsdatasetidusersuseridpatch) - Update User Dataset Collaborator
* [deleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete](docs/sdks/datasets/README.md#deleteuserdatasetcollaboratordatasetsdatasetidusersuseriddelete) - Delete User Dataset Collaborator
* [updateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch](docs/sdks/datasets/README.md#updategroupdatasetcollaboratordatasetsdatasetidgroupsgroupidpatch) - Update Group Dataset Collaborator
* [deleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete](docs/sdks/datasets/README.md#deletegroupdatasetcollaboratordatasetsdatasetidgroupsgroupiddelete) - Delete Group Dataset Collaborator
* [queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost](docs/sdks/datasets/README.md#querydatasetversionsdatasetsdatasetidversionsquerypost) - Query Dataset Versions
* [getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet](docs/sdks/datasets/README.md#getdatasetversioncontentdatasetsdatasetidversionsversionindexcontentget) - Get Dataset Version Content
* [updateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch](docs/sdks/datasets/README.md#updatedatasetversiondatasetsdatasetidversionsversionindexpatch) - Update Dataset Version
* [listDatasetProjectsDatasetsDatasetIdProjectsGet](docs/sdks/datasets/README.md#listdatasetprojectsdatasetsdatasetidprojectsget) - List Dataset Projects
* [extendDatasetContentDatasetsExtendPost](docs/sdks/datasets/README.md#extenddatasetcontentdatasetsextendpost) - Extend Dataset Content
* [getDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet](docs/sdks/datasets/README.md#getdatasetsyntheticextendstatusdatasetsextenddatasetidget) - Get Dataset Synthetic Extend Status

### [Edits](docs/sdks/edits/README.md)

* [exportEditsDatabricksIntegrationsDatabricksEditsExportPost](docs/sdks/edits/README.md#exporteditsdatabricksintegrationsdatabrickseditsexportpost) - Export Edits Databricks
* [exportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost](docs/sdks/edits/README.md#exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpost) - Export Edits Databricks Unity Catalog

### [Experiment](docs/sdks/experiment/README.md)

* [createExperimentProjectsProjectIdExperimentsPost](docs/sdks/experiment/README.md#createexperimentprojectsprojectidexperimentspost) - Create Experiment
* [~~listExperimentsProjectsProjectIdExperimentsGet~~](docs/sdks/experiment/README.md#listexperimentsprojectsprojectidexperimentsget) - List Experiments :warning: **Deprecated**
* [listExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet](docs/sdks/experiment/README.md#listexperimentspaginatedprojectsprojectidexperimentspaginatedget) - List Experiments Paginated
* [searchExperimentsProjectsProjectIdExperimentsSearchPost](docs/sdks/experiment/README.md#searchexperimentsprojectsprojectidexperimentssearchpost) - Search Experiments
* [getExperimentProjectsProjectIdExperimentsExperimentIdGet](docs/sdks/experiment/README.md#getexperimentprojectsprojectidexperimentsexperimentidget) - Get Experiment
* [updateExperimentProjectsProjectIdExperimentsExperimentIdPut](docs/sdks/experiment/README.md#updateexperimentprojectsprojectidexperimentsexperimentidput) - Update Experiment
* [deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete](docs/sdks/experiment/README.md#deleteexperimentprojectsprojectidexperimentsexperimentiddelete) - Delete Experiment
* [experimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost](docs/sdks/experiment/README.md#experimentsavailablecolumnsprojectsprojectidexperimentsavailablecolumnspost) - Experiments Available Columns
* [getExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost](docs/sdks/experiment/README.md#getexperimentmetricsprojectsprojectidexperimentsexperimentidmetricspost) - Get Experiment Metrics
* [getExperimentsMetricsProjectsProjectIdExperimentsMetricsPost](docs/sdks/experiment/README.md#getexperimentsmetricsprojectsprojectidexperimentsmetricspost) - Get Experiments Metrics
* [updateMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsPatch](docs/sdks/experiment/README.md#updatemetricsettingsprojectsprojectidexperimentsexperimentidmetricsettingspatch) - Update Metric Settings
* [getMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsGet](docs/sdks/experiment/README.md#getmetricsettingsprojectsprojectidexperimentsexperimentidmetricsettingsget) - Get Metric Settings

### [ExperimentTags](docs/sdks/experimenttags/README.md)

* [getExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet](docs/sdks/experimenttags/README.md#getexperimenttagsprojectsprojectidexperimentsexperimentidtagsget) - Get Experiment Tags
* [setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost](docs/sdks/experimenttags/README.md#settagforexperimentprojectsprojectidexperimentsexperimentidtagspost) - Set Tag For Experiment
* [getExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet](docs/sdks/experimenttags/README.md#getexperimenttagprojectsprojectidexperimentsexperimentidtagstagidget) - Get Experiment Tag
* [updateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut](docs/sdks/experimenttags/README.md#updatetagforexperimentprojectsprojectidexperimentsexperimentidtagstagidput) - Update Tag For Experiment
* [deleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete](docs/sdks/experimenttags/README.md#deleteexperimenttagprojectsprojectidexperimentsexperimentidtagstagiddelete) - Delete Experiment Tag

### [Health](docs/sdks/health/README.md)

* [healthcheckHealthcheckGet](docs/sdks/health/README.md#healthcheckhealthcheckget) - Healthcheck

### [Integrations](docs/sdks/integrations/README.md)

* [listIntegrationsIntegrationsGet](docs/sdks/integrations/README.md#listintegrationsintegrationsget) - List Integrations
* [listAvailableIntegrationsIntegrationsAvailableGet](docs/sdks/integrations/README.md#listavailableintegrationsintegrationsavailableget) - List Available Integrations
* [deleteIntegrationIntegrationsNameDelete](docs/sdks/integrations/README.md#deleteintegrationintegrationsnamedelete) - Delete Integration
* [getIntegrationIntegrationsNameGet](docs/sdks/integrations/README.md#getintegrationintegrationsnameget) - Get Integration
* [getIntegrationStatusIntegrationsNameStatusGet](docs/sdks/integrations/README.md#getintegrationstatusintegrationsnamestatusget) - Get Integration Status
* [listUserIntegrationCollaboratorsIntegrationsIntegrationIdUsersGet](docs/sdks/integrations/README.md#listuserintegrationcollaboratorsintegrationsintegrationidusersget) - List User Integration Collaborators
* [createUserIntegrationCollaboratorsIntegrationsIntegrationIdUsersPost](docs/sdks/integrations/README.md#createuserintegrationcollaboratorsintegrationsintegrationiduserspost) - Create User Integration Collaborators
* [updateUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdPatch](docs/sdks/integrations/README.md#updateuserintegrationcollaboratorintegrationsintegrationidusersuseridpatch) - Update User Integration Collaborator
* [deleteUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdDelete](docs/sdks/integrations/README.md#deleteuserintegrationcollaboratorintegrationsintegrationidusersuseriddelete) - Delete User Integration Collaborator
* [createGroupIntegrationCollaboratorsIntegrationsIntegrationIdGroupsPost](docs/sdks/integrations/README.md#creategroupintegrationcollaboratorsintegrationsintegrationidgroupspost) - Create Group Integration Collaborators
* [listGroupIntegrationCollaboratorsIntegrationsIntegrationIdGroupsGet](docs/sdks/integrations/README.md#listgroupintegrationcollaboratorsintegrationsintegrationidgroupsget) - List Group Integration Collaborators
* [updateGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdPatch](docs/sdks/integrations/README.md#updategroupintegrationcollaboratorintegrationsintegrationidgroupsgroupidpatch) - Update Group Integration Collaborator
* [deleteGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdDelete](docs/sdks/integrations/README.md#deletegroupintegrationcollaboratorintegrationsintegrationidgroupsgroupiddelete) - Delete Group Integration Collaborator
* [createOrUpdateIntegrationSelectionIntegrationsIntegrationIdSelectPut](docs/sdks/integrations/README.md#createorupdateintegrationselectionintegrationsintegrationidselectput) - Create Or Update Integration Selection
* [createOrUpdateIntegrationIntegrationsAnthropicPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsanthropicput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsAwsBedrockPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsawsbedrockput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsAwsSagemakerPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsawssagemakerput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsAzurePut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsazureput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsCustomPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationscustomput) - Create Or Update Integration
* [~~createOrUpdateUnityCatalogIntegrationIntegrationsDatabricksUnityCatalogSqlPut~~](docs/sdks/integrations/README.md#createorupdateunitycatalogintegrationintegrationsdatabricksunitycatalogsqlput) - Create Or Update Unity Catalog Integration :warning: **Deprecated**
* [createOrUpdateUnityCatalogIntegrationIntegrationsDatabricksPut](docs/sdks/integrations/README.md#createorupdateunitycatalogintegrationintegrationsdatabricksput) - Create Or Update Unity Catalog Integration
* [getDatabricksCatalogsIntegrationsDatabricksCatalogsGet](docs/sdks/integrations/README.md#getdatabrickscatalogsintegrationsdatabrickscatalogsget) - Get Databricks Catalogs
* [getDatabasesForClusterIntegrationsDatabricksDatabasesGet](docs/sdks/integrations/README.md#getdatabasesforclusterintegrationsdatabricksdatabasesget) - Get Databases For Cluster
* [exportToDatabricksIntegrationsDatabricksExportPost](docs/sdks/integrations/README.md#exporttodatabricksintegrationsdatabricksexportpost) - Export To Databricks
* [exportEditsDatabricksIntegrationsDatabricksEditsExportPost](docs/sdks/integrations/README.md#exporteditsdatabricksintegrationsdatabrickseditsexportpost) - Export Edits Databricks
* [exportToDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogExportPost](docs/sdks/integrations/README.md#exporttodatabricksunitycatalogintegrationsdatabricksunitycatalogexportpost) - Export To Databricks Unity Catalog
* [exportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost](docs/sdks/integrations/README.md#exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpost) - Export Edits Databricks Unity Catalog
* [createOrUpdateIntegrationIntegrationsLabelstudioPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationslabelstudioput) - Create Or Update Integration
* [getLabelstudioProjectsIntegrationsLabelstudioProjectsGet](docs/sdks/integrations/README.md#getlabelstudioprojectsintegrationslabelstudioprojectsget) - Get Labelstudio Projects
* [exportToLabelstudioIntegrationsLabelstudioExportPost](docs/sdks/integrations/README.md#exporttolabelstudiointegrationslabelstudioexportpost) - Export To Labelstudio
* [createOrUpdateIntegrationIntegrationsMistralPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsmistralput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsNvidiaPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsnvidiaput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsOpenaiPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsopenaiput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsVegasGatewayPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsvegasgatewayput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsVertexAiPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsvertexaiput) - Create Or Update Integration
* [createOrUpdateIntegrationIntegrationsWriterPut](docs/sdks/integrations/README.md#createorupdateintegrationintegrationswriterput) - Create Or Update Integration

### [Jobs](docs/sdks/jobs/README.md)

* [createJobJobsPost](docs/sdks/jobs/README.md#createjobjobspost) - Create Job
* [getJobJobsJobIdGet](docs/sdks/jobs/README.md#getjobjobsjobidget) - Get Job
* [getJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet](docs/sdks/jobs/README.md#getjobsforprojectrunprojectsprojectidrunsrunidjobsget) - Get Jobs For Project Run
* [getLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet](docs/sdks/jobs/README.md#getlatestjobforprojectrunprojectsprojectidrunsrunidjobslatestget) - Get Latest Job For Project Run

### [LlmIntegrations](docs/sdks/llmintegrations/README.md)

* [getAvailableModelsLlmIntegrationsLlmIntegrationModelsGet](docs/sdks/llmintegrations/README.md#getavailablemodelsllmintegrationsllmintegrationmodelsget) - Get Available Models
* [getAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet](docs/sdks/llmintegrations/README.md#getavailablescorermodelsllmintegrationsllmintegrationscorermodelsget) - Get Available Scorer Models
* [getIntegrationsAndModelInfoLlmIntegrationsGet](docs/sdks/llmintegrations/README.md#getintegrationsandmodelinfollmintegrationsget) - Get Integrations And Model Info
* [getIntegrationsAndModelInfoForRunLlmIntegrationsProjectsProjectIdRunsRunIdGet](docs/sdks/llmintegrations/README.md#getintegrationsandmodelinfoforrunllmintegrationsprojectsprojectidrunsrunidget) - Get Integrations And Model Info For Run

### [LogStream](docs/sdks/logstream/README.md)

* [createLogStreamProjectsProjectIdLogStreamsPost](docs/sdks/logstream/README.md#createlogstreamprojectsprojectidlogstreamspost) - Create Log Stream
* [~~listLogStreamsProjectsProjectIdLogStreamsGet~~](docs/sdks/logstream/README.md#listlogstreamsprojectsprojectidlogstreamsget) - List Log Streams :warning: **Deprecated**
* [listLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet](docs/sdks/logstream/README.md#listlogstreamspaginatedprojectsprojectidlogstreamspaginatedget) - List Log Streams Paginated
* [searchLogStreamsProjectsProjectIdLogStreamsSearchPost](docs/sdks/logstream/README.md#searchlogstreamsprojectsprojectidlogstreamssearchpost) - Search Log Streams
* [getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet](docs/sdks/logstream/README.md#getlogstreamprojectsprojectidlogstreamslogstreamidget) - Get Log Stream
* [updateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut](docs/sdks/logstream/README.md#updatelogstreamprojectsprojectidlogstreamslogstreamidput) - Update Log Stream
* [deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete](docs/sdks/logstream/README.md#deletelogstreamprojectsprojectidlogstreamslogstreamiddelete) - Delete Log Stream
* [updateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch](docs/sdks/logstream/README.md#updatemetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingspatch) - Update Metric Settings
* [getMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet](docs/sdks/logstream/README.md#getmetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingsget) - Get Metric Settings

### [Projects](docs/sdks/projects/README.md)

* [getProjectsPaginatedProjectsPaginatedPost](docs/sdks/projects/README.md#getprojectspaginatedprojectspaginatedpost) - Get Projects Paginated
* [getProjectsCountProjectsCountPost](docs/sdks/projects/README.md#getprojectscountprojectscountpost) - Get Projects Count
* [~~getAllProjectsProjectsAllGet~~](docs/sdks/projects/README.md#getallprojectsprojectsallget) - Get All Projects :warning: **Deprecated**
* [~~getProjectsProjectsGet~~](docs/sdks/projects/README.md#getprojectsprojectsget) - Get Projects :warning: **Deprecated**
* [createProjectProjectsPost](docs/sdks/projects/README.md#createprojectprojectspost) - Create Project
* [uploadFileProjectsProjectIdUploadFilePost](docs/sdks/projects/README.md#uploadfileprojectsprojectiduploadfilepost) - Upload File
* [getCollaboratorRolesCollaboratorRolesGet](docs/sdks/projects/README.md#getcollaboratorrolescollaboratorrolesget) - Get Collaborator Roles
* [getProjectProjectsProjectIdGet](docs/sdks/projects/README.md#getprojectprojectsprojectidget) - Get Project
* [updateProjectProjectsProjectIdPut](docs/sdks/projects/README.md#updateprojectprojectsprojectidput) - Update Project
* [deleteProjectProjectsProjectIdDelete](docs/sdks/projects/README.md#deleteprojectprojectsprojectiddelete) - Delete Project
* [createUserProjectCollaboratorsProjectsProjectIdUsersPost](docs/sdks/projects/README.md#createuserprojectcollaboratorsprojectsprojectiduserspost) - Create User Project Collaborators
* [listUserProjectCollaboratorsProjectsProjectIdUsersGet](docs/sdks/projects/README.md#listuserprojectcollaboratorsprojectsprojectidusersget) - List User Project Collaborators
* [createGroupProjectCollaboratorsProjectsProjectIdGroupsPost](docs/sdks/projects/README.md#creategroupprojectcollaboratorsprojectsprojectidgroupspost) - Create Group Project Collaborators
* [listGroupProjectCollaboratorsProjectsProjectIdGroupsGet](docs/sdks/projects/README.md#listgroupprojectcollaboratorsprojectsprojectidgroupsget) - List Group Project Collaborators
* [updateUserProjectCollaboratorProjectsProjectIdUsersUserIdPatch](docs/sdks/projects/README.md#updateuserprojectcollaboratorprojectsprojectidusersuseridpatch) - Update User Project Collaborator
* [deleteUserProjectCollaboratorProjectsProjectIdUsersUserIdDelete](docs/sdks/projects/README.md#deleteuserprojectcollaboratorprojectsprojectidusersuseriddelete) - Delete User Project Collaborator
* [updateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatch](docs/sdks/projects/README.md#updategroupprojectcollaboratorprojectsprojectidgroupsgroupidpatch) - Update Group Project Collaborator
* [deleteGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdDelete](docs/sdks/projects/README.md#deletegroupprojectcollaboratorprojectsprojectidgroupsgroupiddelete) - Delete Group Project Collaborator

### [Prompts](docs/sdks/prompts/README.md)

* [createPromptTemplateWithVersionProjectsProjectIdTemplatesPost](docs/sdks/prompts/README.md#createprompttemplatewithversionprojectsprojectidtemplatespost) - Create Prompt Template With Version
* [getProjectTemplatesProjectsProjectIdTemplatesGet](docs/sdks/prompts/README.md#getprojecttemplatesprojectsprojectidtemplatesget) - Get Project Templates
* [getTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet](docs/sdks/prompts/README.md#gettemplateversionbynameprojectsprojectidtemplatesversionsget) - Get Template Version By Name
* [~~getTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet~~](docs/sdks/prompts/README.md#gettemplatefromprojectprojectsprojectidtemplatestemplateidget) - Get Template From Project :warning: **Deprecated**
* [~~deleteTemplateProjectsProjectIdTemplatesTemplateIdDelete~~](docs/sdks/prompts/README.md#deletetemplateprojectsprojectidtemplatestemplateiddelete) - Delete Template :warning: **Deprecated**
* [~~createPromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost~~](docs/sdks/prompts/README.md#createprompttemplateversionprojectsprojectidtemplatestemplateidversionspost) - Create Prompt Template Version :warning: **Deprecated**
* [queryTemplatesTemplatesQueryPost](docs/sdks/prompts/README.md#querytemplatestemplatesquerypost) - Query Templates
* [queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost](docs/sdks/prompts/README.md#querytemplateversionstemplatestemplateidversionsquerypost) - Query Template Versions
* [~~getTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet~~](docs/sdks/prompts/README.md#gettemplateversionprojectsprojectidtemplatestemplateidversionsversionget) - Get Template Version :warning: **Deprecated**
* [~~setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut~~](docs/sdks/prompts/README.md#setselectedtemplateversionprojectsprojectidtemplatestemplateidversionsversionput) - Set Selected Template Version :warning: **Deprecated**
* [renderTemplateRenderTemplatePost](docs/sdks/prompts/README.md#rendertemplaterendertemplatepost) - Render Template
* [generateTemplateInputStubInputStubPost](docs/sdks/prompts/README.md#generatetemplateinputstubinputstubpost) - Generate Template Input Stub
* [createGlobalPromptTemplateTemplatesPost](docs/sdks/prompts/README.md#createglobalprompttemplatetemplatespost) - Create Global Prompt Template
* [bulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete](docs/sdks/prompts/README.md#bulkdeleteglobaltemplatestemplatesbulkdeletedelete) - Bulk Delete Global Templates
* [getGlobalTemplateTemplatesTemplateIdGet](docs/sdks/prompts/README.md#getglobaltemplatetemplatestemplateidget) - Get Global Template
* [updateGlobalTemplateTemplatesTemplateIdPatch](docs/sdks/prompts/README.md#updateglobaltemplatetemplatestemplateidpatch) - Update Global Template
* [deleteGlobalTemplateTemplatesTemplateIdDelete](docs/sdks/prompts/README.md#deleteglobaltemplatetemplatestemplateiddelete) - Delete Global Template
* [createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost](docs/sdks/prompts/README.md#createglobalprompttemplateversiontemplatestemplateidversionspost) - Create Global Prompt Template Version
* [getGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet](docs/sdks/prompts/README.md#getglobaltemplateversiontemplatestemplateidversionsversionget) - Get Global Template Version
* [setSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut](docs/sdks/prompts/README.md#setselectedglobaltemplateversiontemplatestemplateidversionsversionput) - Set Selected Global Template Version
* [createUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost](docs/sdks/prompts/README.md#createuserprompttemplatecollaboratorstemplatestemplateiduserspost) - Create User Prompt Template Collaborators
* [listUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet](docs/sdks/prompts/README.md#listuserprompttemplatecollaboratorstemplatestemplateidusersget) - List User Prompt Template Collaborators
* [updateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch](docs/sdks/prompts/README.md#updateuserprompttemplatecollaboratortemplatestemplateidusersuseridpatch) - Update User Prompt Template Collaborator
* [deleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete](docs/sdks/prompts/README.md#deleteuserprompttemplatecollaboratortemplatestemplateidusersuseriddelete) - Delete User Prompt Template Collaborator
* [createGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost](docs/sdks/prompts/README.md#creategroupprompttemplatecollaboratorstemplatestemplateidgroupspost) - Create Group Prompt Template Collaborators
* [listGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet](docs/sdks/prompts/README.md#listgroupprompttemplatecollaboratorstemplatestemplateidgroupsget) - List Group Prompt Template Collaborators
* [updateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch](docs/sdks/prompts/README.md#updategroupprompttemplatecollaboratortemplatestemplateidgroupsgroupidpatch) - Update Group Prompt Template Collaborator
* [deleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete](docs/sdks/prompts/README.md#deletegroupprompttemplatecollaboratortemplatestemplateidgroupsgroupiddelete) - Delete Group Prompt Template Collaborator
* [createScorersPost](docs/sdks/prompts/README.md#createscorerspost) - Create
* [updateScorersScorerIdPatch](docs/sdks/prompts/README.md#updatescorersscoreridpatch) - Update
* [deleteScorerScorersScorerIdDelete](docs/sdks/prompts/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
* [getScorerScorersScorerIdGet](docs/sdks/prompts/README.md#getscorerscorersscoreridget) - Get Scorer
* [createLlmScorerVersionScorersScorerIdVersionLlmPost](docs/sdks/prompts/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
* [validateCodeScorerScorersCodeValidatePost](docs/sdks/prompts/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
* [validateCodeScorerLogRecordScorersCodeValidateLogRecordPost](docs/sdks/prompts/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
* [getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet](docs/sdks/prompts/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
* [createCodeScorerVersionScorersScorerIdVersionCodePost](docs/sdks/prompts/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
* [getScorerVersionCodeScorersScorerIdVersionCodeGet](docs/sdks/prompts/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
* [createPresetScorerVersionScorersScorerIdVersionPresetPost](docs/sdks/prompts/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
* [createLunaScorerVersionScorersScorerIdVersionLunaPost](docs/sdks/prompts/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
* [listScorersWithFiltersScorersListPost](docs/sdks/prompts/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
* [listTagsScorersTagsGet](docs/sdks/prompts/README.md#listtagsscorerstagsget) - List Tags
* [getScorerVersionOrLatestScorersScorerIdVersionGet](docs/sdks/prompts/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
* [listAllVersionsForScorerScorersScorerIdVersionsGet](docs/sdks/prompts/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
* [listProjectsForScorerRouteScorersScorerIdProjectsGet](docs/sdks/prompts/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
* [listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet](docs/sdks/prompts/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
* [restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost](docs/sdks/prompts/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
* [autogenLlmScorerScorersLlmAutogenPost](docs/sdks/prompts/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
* [manualLlmValidateScorersLlmValidatePost](docs/sdks/prompts/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
* [validateLlmScorerLogRecordScorersLlmValidateLogRecordPost](docs/sdks/prompts/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record

### [Protect](docs/sdks/protect/README.md)

* [invokeProtectInvokePost](docs/sdks/protect/README.md#invokeprotectinvokepost) - Invoke
* [createStageProjectsProjectIdStagesPost](docs/sdks/protect/README.md#createstageprojectsprojectidstagespost) - Create Stage
* [getStageProjectsProjectIdStagesGet](docs/sdks/protect/README.md#getstageprojectsprojectidstagesget) - Get Stage
* [updateStageProjectsProjectIdStagesStageIdPost](docs/sdks/protect/README.md#updatestageprojectsprojectidstagesstageidpost) - Update Stage
* [pauseStageProjectsProjectIdStagesStageIdPut](docs/sdks/protect/README.md#pausestageprojectsprojectidstagesstageidput) - Pause Stage

### [Rows](docs/sdks/rows/README.md)

* [createScorersPost](docs/sdks/rows/README.md#createscorerspost) - Create
* [updateScorersScorerIdPatch](docs/sdks/rows/README.md#updatescorersscoreridpatch) - Update
* [deleteScorerScorersScorerIdDelete](docs/sdks/rows/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
* [getScorerScorersScorerIdGet](docs/sdks/rows/README.md#getscorerscorersscoreridget) - Get Scorer
* [createLlmScorerVersionScorersScorerIdVersionLlmPost](docs/sdks/rows/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
* [validateCodeScorerScorersCodeValidatePost](docs/sdks/rows/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
* [validateCodeScorerLogRecordScorersCodeValidateLogRecordPost](docs/sdks/rows/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
* [getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet](docs/sdks/rows/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
* [createCodeScorerVersionScorersScorerIdVersionCodePost](docs/sdks/rows/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
* [getScorerVersionCodeScorersScorerIdVersionCodeGet](docs/sdks/rows/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
* [createPresetScorerVersionScorersScorerIdVersionPresetPost](docs/sdks/rows/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
* [createLunaScorerVersionScorersScorerIdVersionLunaPost](docs/sdks/rows/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
* [listScorersWithFiltersScorersListPost](docs/sdks/rows/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
* [listTagsScorersTagsGet](docs/sdks/rows/README.md#listtagsscorerstagsget) - List Tags
* [getScorerVersionOrLatestScorersScorerIdVersionGet](docs/sdks/rows/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
* [listAllVersionsForScorerScorersScorerIdVersionsGet](docs/sdks/rows/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
* [listProjectsForScorerRouteScorersScorerIdProjectsGet](docs/sdks/rows/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
* [listProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet](docs/sdks/rows/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
* [restoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost](docs/sdks/rows/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
* [autogenLlmScorerScorersLlmAutogenPost](docs/sdks/rows/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
* [manualLlmValidateScorersLlmValidatePost](docs/sdks/rows/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
* [validateLlmScorerLogRecordScorersLlmValidateLogRecordPost](docs/sdks/rows/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record

### [RunScorerSettings](docs/sdks/runscorersettings/README.md)

* [upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch](docs/sdks/runscorersettings/README.md#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspatch) - Upsert Scorers Config
* [upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost](docs/sdks/runscorersettings/README.md#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspost) - Upsert Scorers Config
* [getSettingsProjectsProjectIdRunsRunIdScorerSettingsGet](docs/sdks/runscorersettings/README.md#getsettingsprojectsprojectidrunsrunidscorersettingsget) - Get Settings

### [Stage](docs/sdks/stage/README.md)

* [createStageProjectsProjectIdStagesPost](docs/sdks/stage/README.md#createstageprojectsprojectidstagespost) - Create Stage
* [getStageProjectsProjectIdStagesGet](docs/sdks/stage/README.md#getstageprojectsprojectidstagesget) - Get Stage
* [updateStageProjectsProjectIdStagesStageIdPost](docs/sdks/stage/README.md#updatestageprojectsprojectidstagesstageidpost) - Update Stage
* [pauseStageProjectsProjectIdStagesStageIdPut](docs/sdks/stage/README.md#pausestageprojectsprojectidstagesstageidput) - Pause Stage

### [Trace](docs/sdks/trace/README.md)

* [logTracesProjectsProjectIdTracesPost](docs/sdks/trace/README.md#logtracesprojectsprojectidtracespost) - Log Traces
* [updateTraceProjectsProjectIdTracesTraceIdPatch](docs/sdks/trace/README.md#updatetraceprojectsprojectidtracestraceidpatch) - Update Trace
* [getTraceProjectsProjectIdTracesTraceIdGet](docs/sdks/trace/README.md#gettraceprojectsprojectidtracestraceidget) - Get Trace
* [updateSpanProjectsProjectIdSpansSpanIdPatch](docs/sdks/trace/README.md#updatespanprojectsprojectidspansspanidpatch) - Update Span
* [getSpanProjectsProjectIdSpansSpanIdGet](docs/sdks/trace/README.md#getspanprojectsprojectidspansspanidget) - Get Span
* [tracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost](docs/sdks/trace/README.md#tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspost) - Traces Available Columns
* [metricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost](docs/sdks/trace/README.md#metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspost) - Metrics Testing Available Columns
* [spansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost](docs/sdks/trace/README.md#spansavailablecolumnsprojectsprojectidspansavailablecolumnspost) - Spans Available Columns
* [queryTracesProjectsProjectIdTracesSearchPost](docs/sdks/trace/README.md#querytracesprojectsprojectidtracessearchpost) - Query Traces
* [queryPartialTracesProjectsProjectIdTracesPartialSearchPost](docs/sdks/trace/README.md#querypartialtracesprojectsprojectidtracespartialsearchpost) - Query Partial Traces
* [countTracesProjectsProjectIdTracesCountPost](docs/sdks/trace/README.md#counttracesprojectsprojectidtracescountpost) - Count Traces
* [logSpansProjectsProjectIdSpansPost](docs/sdks/trace/README.md#logspansprojectsprojectidspanspost) - Log Spans
* [querySpansProjectsProjectIdSpansSearchPost](docs/sdks/trace/README.md#queryspansprojectsprojectidspanssearchpost) - Query Spans
* [queryPartialSpansProjectsProjectIdSpansPartialSearchPost](docs/sdks/trace/README.md#querypartialspansprojectsprojectidspanspartialsearchpost) - Query Partial Spans
* [countSpansProjectsProjectIdSpansCountPost](docs/sdks/trace/README.md#countspansprojectsprojectidspanscountpost) - Count Spans
* [queryMetricsProjectsProjectIdMetricsSearchPost](docs/sdks/trace/README.md#querymetricsprojectsprojectidmetricssearchpost) - Query Metrics
* [createSessionProjectsProjectIdSessionsPost](docs/sdks/trace/README.md#createsessionprojectsprojectidsessionspost) - Create Session
* [querySessionsProjectsProjectIdSessionsSearchPost](docs/sdks/trace/README.md#querysessionsprojectsprojectidsessionssearchpost) - Query Sessions
* [queryPartialSessionsProjectsProjectIdSessionsPartialSearchPost](docs/sdks/trace/README.md#querypartialsessionsprojectsprojectidsessionspartialsearchpost) - Query Partial Sessions
* [countSessionsProjectsProjectIdSessionsCountPost](docs/sdks/trace/README.md#countsessionsprojectsprojectidsessionscountpost) - Count Sessions
* [getSessionProjectsProjectIdSessionsSessionIdGet](docs/sdks/trace/README.md#getsessionprojectsprojectidsessionssessionidget) - Get Session
* [sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost](docs/sdks/trace/README.md#sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspost) - Sessions Available Columns
* [getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost](docs/sdks/trace/README.md#getaggregatedtraceviewprojectsprojectidtracesaggregatedpost) - Get Aggregated Trace View
* [exportRecordsProjectsProjectIdExportRecordsPost](docs/sdks/trace/README.md#exportrecordsprojectsprojectidexportrecordspost) - Export Records
* [recomputeMetricsProjectsProjectIdRecomputeMetricsPost](docs/sdks/trace/README.md#recomputemetricsprojectsprojectidrecomputemetricspost) - Recompute Metrics
* [deleteTracesProjectsProjectIdTracesDeletePost](docs/sdks/trace/README.md#deletetracesprojectsprojectidtracesdeletepost) - Delete Traces
* [deleteSpansProjectsProjectIdSpansDeletePost](docs/sdks/trace/README.md#deletespansprojectsprojectidspansdeletepost) - Delete Spans
* [deleteSessionsProjectsProjectIdSessionsDeletePost](docs/sdks/trace/README.md#deletesessionsprojectsprojectidsessionsdeletepost) - Delete Sessions

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authLoginApiKeyLoginApiKeyPost`](docs/sdks/auth/README.md#loginapikeyloginapikeypost) - Login Api Key
- [`authLoginEmailLoginPost`](docs/sdks/auth/README.md#loginemailloginpost) - Login Email
- [`datasetsBulkDeleteDatasetsDatasetsBulkDeleteDelete`](docs/sdks/datasets/README.md#bulkdeletedatasetsdatasetsbulkdeletedelete) - Bulk Delete Datasets
- [`datasetsCreateDatasetDatasetsPost`](docs/sdks/datasets/README.md#createdatasetdatasetspost) - Create Dataset
- [`datasetsCreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost`](docs/sdks/datasets/README.md#creategroupdatasetcollaboratorsdatasetsdatasetidgroupspost) - Create Group Dataset Collaborators
- [`datasetsCreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPost`](docs/sdks/datasets/README.md#createuserdatasetcollaboratorsdatasetsdatasetiduserspost) - Create User Dataset Collaborators
- [`datasetsDeleteDatasetDatasetsDatasetIdDelete`](docs/sdks/datasets/README.md#deletedatasetdatasetsdatasetiddelete) - Delete Dataset
- [`datasetsDeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete`](docs/sdks/datasets/README.md#deletegroupdatasetcollaboratordatasetsdatasetidgroupsgroupiddelete) - Delete Group Dataset Collaborator
- [`datasetsDeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete`](docs/sdks/datasets/README.md#deleteuserdatasetcollaboratordatasetsdatasetidusersuseriddelete) - Delete User Dataset Collaborator
- [`datasetsDownloadDatasetDatasetsDatasetIdDownloadGet`](docs/sdks/datasets/README.md#downloaddatasetdatasetsdatasetiddownloadget) - Download Dataset
- [`datasetsExtendDatasetContentDatasetsExtendPost`](docs/sdks/datasets/README.md#extenddatasetcontentdatasetsextendpost) - Extend Dataset Content
- [`datasetsGetDatasetContentDatasetsDatasetIdContentGet`](docs/sdks/datasets/README.md#getdatasetcontentdatasetsdatasetidcontentget) - Get Dataset Content
- [`datasetsGetDatasetDatasetsDatasetIdGet`](docs/sdks/datasets/README.md#getdatasetdatasetsdatasetidget) - Get Dataset
- [`datasetsGetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet`](docs/sdks/datasets/README.md#getdatasetsyntheticextendstatusdatasetsextenddatasetidget) - Get Dataset Synthetic Extend Status
- [`datasetsGetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet`](docs/sdks/datasets/README.md#getdatasetversioncontentdatasetsdatasetidversionsversionindexcontentget) - Get Dataset Version Content
- [`datasetsListDatasetProjectsDatasetsDatasetIdProjectsGet`](docs/sdks/datasets/README.md#listdatasetprojectsdatasetsdatasetidprojectsget) - List Dataset Projects
- [`datasetsListDatasetsDatasetsGet`](docs/sdks/datasets/README.md#listdatasetsdatasetsget) - List Datasets
- [`datasetsListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet`](docs/sdks/datasets/README.md#listgroupdatasetcollaboratorsdatasetsdatasetidgroupsget) - List Group Dataset Collaborators
- [`datasetsListUserDatasetCollaboratorsDatasetsDatasetIdUsersGet`](docs/sdks/datasets/README.md#listuserdatasetcollaboratorsdatasetsdatasetidusersget) - List User Dataset Collaborators
- [`datasetsPreviewDatasetDatasetsDatasetIdPreviewPost`](docs/sdks/datasets/README.md#previewdatasetdatasetsdatasetidpreviewpost) - Preview Dataset
- [`datasetsQueryDatasetContentDatasetsDatasetIdContentQueryPost`](docs/sdks/datasets/README.md#querydatasetcontentdatasetsdatasetidcontentquerypost) - Query Dataset Content
- [`datasetsQueryDatasetsDatasetsQueryPost`](docs/sdks/datasets/README.md#querydatasetsdatasetsquerypost) - Query Datasets
- [`datasetsQueryDatasetVersionsDatasetsDatasetIdVersionsQueryPost`](docs/sdks/datasets/README.md#querydatasetversionsdatasetsdatasetidversionsquerypost) - Query Dataset Versions
- [`datasetsUpdateDatasetContentDatasetsDatasetIdContentPatch`](docs/sdks/datasets/README.md#updatedatasetcontentdatasetsdatasetidcontentpatch) - Update Dataset Content
- [`datasetsUpdateDatasetDatasetsDatasetIdPatch`](docs/sdks/datasets/README.md#updatedatasetdatasetsdatasetidpatch) - Update Dataset
- [`datasetsUpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch`](docs/sdks/datasets/README.md#updatedatasetversiondatasetsdatasetidversionsversionindexpatch) - Update Dataset Version
- [`datasetsUpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch`](docs/sdks/datasets/README.md#updategroupdatasetcollaboratordatasetsdatasetidgroupsgroupidpatch) - Update Group Dataset Collaborator
- [`datasetsUpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch`](docs/sdks/datasets/README.md#updateuserdatasetcollaboratordatasetsdatasetidusersuseridpatch) - Update User Dataset Collaborator
- [`datasetsUpsertDatasetContentDatasetsDatasetIdContentPut`](docs/sdks/datasets/README.md#upsertdatasetcontentdatasetsdatasetidcontentput) - Upsert Dataset Content
- [`experimentCreateExperimentProjectsProjectIdExperimentsPost`](docs/sdks/experiment/README.md#createexperimentprojectsprojectidexperimentspost) - Create Experiment
- [`experimentDeleteExperimentProjectsProjectIdExperimentsExperimentIdDelete`](docs/sdks/experiment/README.md#deleteexperimentprojectsprojectidexperimentsexperimentiddelete) - Delete Experiment
- [`experimentExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost`](docs/sdks/experiment/README.md#experimentsavailablecolumnsprojectsprojectidexperimentsavailablecolumnspost) - Experiments Available Columns
- [`experimentGetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost`](docs/sdks/experiment/README.md#getexperimentmetricsprojectsprojectidexperimentsexperimentidmetricspost) - Get Experiment Metrics
- [`experimentGetExperimentProjectsProjectIdExperimentsExperimentIdGet`](docs/sdks/experiment/README.md#getexperimentprojectsprojectidexperimentsexperimentidget) - Get Experiment
- [`experimentGetExperimentsMetricsProjectsProjectIdExperimentsMetricsPost`](docs/sdks/experiment/README.md#getexperimentsmetricsprojectsprojectidexperimentsmetricspost) - Get Experiments Metrics
- [`experimentGetMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsGet`](docs/sdks/experiment/README.md#getmetricsettingsprojectsprojectidexperimentsexperimentidmetricsettingsget) - Get Metric Settings
- [`experimentListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet`](docs/sdks/experiment/README.md#listexperimentspaginatedprojectsprojectidexperimentspaginatedget) - List Experiments Paginated
- [`experimentSearchExperimentsProjectsProjectIdExperimentsSearchPost`](docs/sdks/experiment/README.md#searchexperimentsprojectsprojectidexperimentssearchpost) - Search Experiments
- [`experimentTagsDeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete`](docs/sdks/experimenttags/README.md#deleteexperimenttagprojectsprojectidexperimentsexperimentidtagstagiddelete) - Delete Experiment Tag
- [`experimentTagsGetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet`](docs/sdks/experimenttags/README.md#getexperimenttagprojectsprojectidexperimentsexperimentidtagstagidget) - Get Experiment Tag
- [`experimentTagsGetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet`](docs/sdks/experimenttags/README.md#getexperimenttagsprojectsprojectidexperimentsexperimentidtagsget) - Get Experiment Tags
- [`experimentTagsSetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost`](docs/sdks/experimenttags/README.md#settagforexperimentprojectsprojectidexperimentsexperimentidtagspost) - Set Tag For Experiment
- [`experimentTagsUpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut`](docs/sdks/experimenttags/README.md#updatetagforexperimentprojectsprojectidexperimentsexperimentidtagstagidput) - Update Tag For Experiment
- [`experimentUpdateExperimentProjectsProjectIdExperimentsExperimentIdPut`](docs/sdks/experiment/README.md#updateexperimentprojectsprojectidexperimentsexperimentidput) - Update Experiment
- [`experimentUpdateMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsPatch`](docs/sdks/experiment/README.md#updatemetricsettingsprojectsprojectidexperimentsexperimentidmetricsettingspatch) - Update Metric Settings
- [`healthHealthcheckHealthcheckGet`](docs/sdks/health/README.md#healthcheckhealthcheckget) - Healthcheck
- [`integrationsCreateGroupIntegrationCollaboratorsIntegrationsIntegrationIdGroupsPost`](docs/sdks/integrations/README.md#creategroupintegrationcollaboratorsintegrationsintegrationidgroupspost) - Create Group Integration Collaborators
- [`integrationsCreateOrUpdateIntegrationIntegrationsAnthropicPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsanthropicput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsAwsBedrockPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsawsbedrockput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsAwsSagemakerPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsawssagemakerput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsAzurePut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsazureput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsCustomPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationscustomput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsLabelstudioPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationslabelstudioput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsMistralPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsmistralput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsNvidiaPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsnvidiaput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsOpenaiPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsopenaiput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsVegasGatewayPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsvegasgatewayput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsVertexAiPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationsvertexaiput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationIntegrationsWriterPut`](docs/sdks/integrations/README.md#createorupdateintegrationintegrationswriterput) - Create Or Update Integration
- [`integrationsCreateOrUpdateIntegrationSelectionIntegrationsIntegrationIdSelectPut`](docs/sdks/integrations/README.md#createorupdateintegrationselectionintegrationsintegrationidselectput) - Create Or Update Integration Selection
- [`integrationsCreateOrUpdateUnityCatalogIntegrationIntegrationsDatabricksPut`](docs/sdks/integrations/README.md#createorupdateunitycatalogintegrationintegrationsdatabricksput) - Create Or Update Unity Catalog Integration
- [`integrationsCreateUserIntegrationCollaboratorsIntegrationsIntegrationIdUsersPost`](docs/sdks/integrations/README.md#createuserintegrationcollaboratorsintegrationsintegrationiduserspost) - Create User Integration Collaborators
- [`integrationsDeleteGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdDelete`](docs/sdks/integrations/README.md#deletegroupintegrationcollaboratorintegrationsintegrationidgroupsgroupiddelete) - Delete Group Integration Collaborator
- [`integrationsDeleteIntegrationIntegrationsNameDelete`](docs/sdks/integrations/README.md#deleteintegrationintegrationsnamedelete) - Delete Integration
- [`integrationsDeleteUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdDelete`](docs/sdks/integrations/README.md#deleteuserintegrationcollaboratorintegrationsintegrationidusersuseriddelete) - Delete User Integration Collaborator
- [`integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost`](docs/sdks/edits/README.md#exporteditsdatabricksintegrationsdatabrickseditsexportpost) - Export Edits Databricks
- [`integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost`](docs/sdks/integrations/README.md#exporteditsdatabricksintegrationsdatabrickseditsexportpost) - Export Edits Databricks
- [`integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost`](docs/sdks/edits/README.md#exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpost) - Export Edits Databricks Unity Catalog
- [`integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost`](docs/sdks/integrations/README.md#exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpost) - Export Edits Databricks Unity Catalog
- [`integrationsExportToDatabricksIntegrationsDatabricksExportPost`](docs/sdks/integrations/README.md#exporttodatabricksintegrationsdatabricksexportpost) - Export To Databricks
- [`integrationsExportToDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogExportPost`](docs/sdks/integrations/README.md#exporttodatabricksunitycatalogintegrationsdatabricksunitycatalogexportpost) - Export To Databricks Unity Catalog
- [`integrationsExportToLabelstudioIntegrationsLabelstudioExportPost`](docs/sdks/integrations/README.md#exporttolabelstudiointegrationslabelstudioexportpost) - Export To Labelstudio
- [`integrationsGetDatabasesForClusterIntegrationsDatabricksDatabasesGet`](docs/sdks/integrations/README.md#getdatabasesforclusterintegrationsdatabricksdatabasesget) - Get Databases For Cluster
- [`integrationsGetDatabricksCatalogsIntegrationsDatabricksCatalogsGet`](docs/sdks/integrations/README.md#getdatabrickscatalogsintegrationsdatabrickscatalogsget) - Get Databricks Catalogs
- [`integrationsGetIntegrationIntegrationsNameGet`](docs/sdks/integrations/README.md#getintegrationintegrationsnameget) - Get Integration
- [`integrationsGetIntegrationStatusIntegrationsNameStatusGet`](docs/sdks/integrations/README.md#getintegrationstatusintegrationsnamestatusget) - Get Integration Status
- [`integrationsGetLabelstudioProjectsIntegrationsLabelstudioProjectsGet`](docs/sdks/integrations/README.md#getlabelstudioprojectsintegrationslabelstudioprojectsget) - Get Labelstudio Projects
- [`integrationsListAvailableIntegrationsIntegrationsAvailableGet`](docs/sdks/integrations/README.md#listavailableintegrationsintegrationsavailableget) - List Available Integrations
- [`integrationsListGroupIntegrationCollaboratorsIntegrationsIntegrationIdGroupsGet`](docs/sdks/integrations/README.md#listgroupintegrationcollaboratorsintegrationsintegrationidgroupsget) - List Group Integration Collaborators
- [`integrationsListIntegrationsIntegrationsGet`](docs/sdks/integrations/README.md#listintegrationsintegrationsget) - List Integrations
- [`integrationsListUserIntegrationCollaboratorsIntegrationsIntegrationIdUsersGet`](docs/sdks/integrations/README.md#listuserintegrationcollaboratorsintegrationsintegrationidusersget) - List User Integration Collaborators
- [`integrationsUpdateGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdPatch`](docs/sdks/integrations/README.md#updategroupintegrationcollaboratorintegrationsintegrationidgroupsgroupidpatch) - Update Group Integration Collaborator
- [`integrationsUpdateUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdPatch`](docs/sdks/integrations/README.md#updateuserintegrationcollaboratorintegrationsintegrationidusersuseridpatch) - Update User Integration Collaborator
- [`jobsCreateJobJobsPost`](docs/sdks/jobs/README.md#createjobjobspost) - Create Job
- [`jobsGetJobJobsJobIdGet`](docs/sdks/jobs/README.md#getjobjobsjobidget) - Get Job
- [`jobsGetJobsForProjectRunProjectsProjectIdRunsRunIdJobsGet`](docs/sdks/jobs/README.md#getjobsforprojectrunprojectsprojectidrunsrunidjobsget) - Get Jobs For Project Run
- [`jobsGetLatestJobForProjectRunProjectsProjectIdRunsRunIdJobsLatestGet`](docs/sdks/jobs/README.md#getlatestjobforprojectrunprojectsprojectidrunsrunidjobslatestget) - Get Latest Job For Project Run
- [`llmIntegrationsGetAvailableModelsLlmIntegrationsLlmIntegrationModelsGet`](docs/sdks/llmintegrations/README.md#getavailablemodelsllmintegrationsllmintegrationmodelsget) - Get Available Models
- [`llmIntegrationsGetAvailableScorerModelsLlmIntegrationsLlmIntegrationScorerModelsGet`](docs/sdks/llmintegrations/README.md#getavailablescorermodelsllmintegrationsllmintegrationscorermodelsget) - Get Available Scorer Models
- [`llmIntegrationsGetIntegrationsAndModelInfoForRunLlmIntegrationsProjectsProjectIdRunsRunIdGet`](docs/sdks/llmintegrations/README.md#getintegrationsandmodelinfoforrunllmintegrationsprojectsprojectidrunsrunidget) - Get Integrations And Model Info For Run
- [`llmIntegrationsGetIntegrationsAndModelInfoLlmIntegrationsGet`](docs/sdks/llmintegrations/README.md#getintegrationsandmodelinfollmintegrationsget) - Get Integrations And Model Info
- [`logStreamCreateLogStreamProjectsProjectIdLogStreamsPost`](docs/sdks/logstream/README.md#createlogstreamprojectsprojectidlogstreamspost) - Create Log Stream
- [`logStreamDeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete`](docs/sdks/logstream/README.md#deletelogstreamprojectsprojectidlogstreamslogstreamiddelete) - Delete Log Stream
- [`logStreamGetLogStreamProjectsProjectIdLogStreamsLogStreamIdGet`](docs/sdks/logstream/README.md#getlogstreamprojectsprojectidlogstreamslogstreamidget) - Get Log Stream
- [`logStreamGetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet`](docs/sdks/logstream/README.md#getmetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingsget) - Get Metric Settings
- [`logStreamListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet`](docs/sdks/logstream/README.md#listlogstreamspaginatedprojectsprojectidlogstreamspaginatedget) - List Log Streams Paginated
- [`logStreamSearchLogStreamsProjectsProjectIdLogStreamsSearchPost`](docs/sdks/logstream/README.md#searchlogstreamsprojectsprojectidlogstreamssearchpost) - Search Log Streams
- [`logStreamUpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut`](docs/sdks/logstream/README.md#updatelogstreamprojectsprojectidlogstreamslogstreamidput) - Update Log Stream
- [`logStreamUpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch`](docs/sdks/logstream/README.md#updatemetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingspatch) - Update Metric Settings
- [`projectsCreateGroupProjectCollaboratorsProjectsProjectIdGroupsPost`](docs/sdks/projects/README.md#creategroupprojectcollaboratorsprojectsprojectidgroupspost) - Create Group Project Collaborators
- [`projectsCreateProjectProjectsPost`](docs/sdks/projects/README.md#createprojectprojectspost) - Create Project
- [`projectsCreateUserProjectCollaboratorsProjectsProjectIdUsersPost`](docs/sdks/projects/README.md#createuserprojectcollaboratorsprojectsprojectiduserspost) - Create User Project Collaborators
- [`projectsDeleteGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdDelete`](docs/sdks/projects/README.md#deletegroupprojectcollaboratorprojectsprojectidgroupsgroupiddelete) - Delete Group Project Collaborator
- [`projectsDeleteProjectProjectsProjectIdDelete`](docs/sdks/projects/README.md#deleteprojectprojectsprojectiddelete) - Delete Project
- [`projectsDeleteUserProjectCollaboratorProjectsProjectIdUsersUserIdDelete`](docs/sdks/projects/README.md#deleteuserprojectcollaboratorprojectsprojectidusersuseriddelete) - Delete User Project Collaborator
- [`projectsGetCollaboratorRolesCollaboratorRolesGet`](docs/sdks/projects/README.md#getcollaboratorrolescollaboratorrolesget) - Get Collaborator Roles
- [`projectsGetProjectProjectsProjectIdGet`](docs/sdks/projects/README.md#getprojectprojectsprojectidget) - Get Project
- [`projectsGetProjectsCountProjectsCountPost`](docs/sdks/projects/README.md#getprojectscountprojectscountpost) - Get Projects Count
- [`projectsGetProjectsPaginatedProjectsPaginatedPost`](docs/sdks/projects/README.md#getprojectspaginatedprojectspaginatedpost) - Get Projects Paginated
- [`projectsListGroupProjectCollaboratorsProjectsProjectIdGroupsGet`](docs/sdks/projects/README.md#listgroupprojectcollaboratorsprojectsprojectidgroupsget) - List Group Project Collaborators
- [`projectsListUserProjectCollaboratorsProjectsProjectIdUsersGet`](docs/sdks/projects/README.md#listuserprojectcollaboratorsprojectsprojectidusersget) - List User Project Collaborators
- [`projectsUpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatch`](docs/sdks/projects/README.md#updategroupprojectcollaboratorprojectsprojectidgroupsgroupidpatch) - Update Group Project Collaborator
- [`projectsUpdateProjectProjectsProjectIdPut`](docs/sdks/projects/README.md#updateprojectprojectsprojectidput) - Update Project
- [`projectsUpdateUserProjectCollaboratorProjectsProjectIdUsersUserIdPatch`](docs/sdks/projects/README.md#updateuserprojectcollaboratorprojectsprojectidusersuseridpatch) - Update User Project Collaborator
- [`projectsUploadFileProjectsProjectIdUploadFilePost`](docs/sdks/projects/README.md#uploadfileprojectsprojectiduploadfilepost) - Upload File
- [`promptsAutogenLlmScorerScorersLlmAutogenPost`](docs/sdks/data/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
- [`promptsAutogenLlmScorerScorersLlmAutogenPost`](docs/sdks/prompts/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
- [`promptsAutogenLlmScorerScorersLlmAutogenPost`](docs/sdks/rows/README.md#autogenllmscorerscorersllmautogenpost) - Autogen Llm Scorer
- [`promptsBulkDeleteGlobalTemplatesTemplatesBulkDeleteDelete`](docs/sdks/prompts/README.md#bulkdeleteglobaltemplatestemplatesbulkdeletedelete) - Bulk Delete Global Templates
- [`promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost`](docs/sdks/data/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
- [`promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost`](docs/sdks/prompts/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
- [`promptsCreateCodeScorerVersionScorersScorerIdVersionCodePost`](docs/sdks/rows/README.md#createcodescorerversionscorersscoreridversioncodepost) - Create Code Scorer Version
- [`promptsCreateGlobalPromptTemplateTemplatesPost`](docs/sdks/prompts/README.md#createglobalprompttemplatetemplatespost) - Create Global Prompt Template
- [`promptsCreateGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost`](docs/sdks/prompts/README.md#createglobalprompttemplateversiontemplatestemplateidversionspost) - Create Global Prompt Template Version
- [`promptsCreateGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsPost`](docs/sdks/prompts/README.md#creategroupprompttemplatecollaboratorstemplatestemplateidgroupspost) - Create Group Prompt Template Collaborators
- [`promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost`](docs/sdks/data/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
- [`promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost`](docs/sdks/prompts/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
- [`promptsCreateLlmScorerVersionScorersScorerIdVersionLlmPost`](docs/sdks/rows/README.md#createllmscorerversionscorersscoreridversionllmpost) - Create Llm Scorer Version
- [`promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost`](docs/sdks/data/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
- [`promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost`](docs/sdks/prompts/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
- [`promptsCreateLunaScorerVersionScorersScorerIdVersionLunaPost`](docs/sdks/rows/README.md#createlunascorerversionscorersscoreridversionlunapost) - Create Luna Scorer Version
- [`promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost`](docs/sdks/data/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
- [`promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost`](docs/sdks/prompts/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
- [`promptsCreatePresetScorerVersionScorersScorerIdVersionPresetPost`](docs/sdks/rows/README.md#createpresetscorerversionscorersscoreridversionpresetpost) - Create Preset Scorer Version
- [`promptsCreatePromptTemplateWithVersionProjectsProjectIdTemplatesPost`](docs/sdks/prompts/README.md#createprompttemplatewithversionprojectsprojectidtemplatespost) - Create Prompt Template With Version
- [`promptsCreateScorersPost`](docs/sdks/data/README.md#createscorerspost) - Create
- [`promptsCreateScorersPost`](docs/sdks/prompts/README.md#createscorerspost) - Create
- [`promptsCreateScorersPost`](docs/sdks/rows/README.md#createscorerspost) - Create
- [`promptsCreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPost`](docs/sdks/prompts/README.md#createuserprompttemplatecollaboratorstemplatestemplateiduserspost) - Create User Prompt Template Collaborators
- [`promptsDeleteGlobalTemplateTemplatesTemplateIdDelete`](docs/sdks/prompts/README.md#deleteglobaltemplatetemplatestemplateiddelete) - Delete Global Template
- [`promptsDeleteGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdDelete`](docs/sdks/prompts/README.md#deletegroupprompttemplatecollaboratortemplatestemplateidgroupsgroupiddelete) - Delete Group Prompt Template Collaborator
- [`promptsDeleteScorerScorersScorerIdDelete`](docs/sdks/data/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
- [`promptsDeleteScorerScorersScorerIdDelete`](docs/sdks/prompts/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
- [`promptsDeleteScorerScorersScorerIdDelete`](docs/sdks/rows/README.md#deletescorerscorersscoreriddelete) - Delete Scorer
- [`promptsDeleteUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdDelete`](docs/sdks/prompts/README.md#deleteuserprompttemplatecollaboratortemplatestemplateidusersuseriddelete) - Delete User Prompt Template Collaborator
- [`promptsGenerateTemplateInputStubInputStubPost`](docs/sdks/prompts/README.md#generatetemplateinputstubinputstubpost) - Generate Template Input Stub
- [`promptsGetGlobalTemplateTemplatesTemplateIdGet`](docs/sdks/prompts/README.md#getglobaltemplatetemplatestemplateidget) - Get Global Template
- [`promptsGetGlobalTemplateVersionTemplatesTemplateIdVersionsVersionGet`](docs/sdks/prompts/README.md#getglobaltemplateversiontemplatestemplateidversionsversionget) - Get Global Template Version
- [`promptsGetProjectTemplatesProjectsProjectIdTemplatesGet`](docs/sdks/prompts/README.md#getprojecttemplatesprojectsprojectidtemplatesget) - Get Project Templates
- [`promptsGetScorerScorersScorerIdGet`](docs/sdks/data/README.md#getscorerscorersscoreridget) - Get Scorer
- [`promptsGetScorerScorersScorerIdGet`](docs/sdks/prompts/README.md#getscorerscorersscoreridget) - Get Scorer
- [`promptsGetScorerScorersScorerIdGet`](docs/sdks/rows/README.md#getscorerscorersscoreridget) - Get Scorer
- [`promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet`](docs/sdks/data/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
- [`promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet`](docs/sdks/prompts/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
- [`promptsGetScorerVersionCodeScorersScorerIdVersionCodeGet`](docs/sdks/rows/README.md#getscorerversioncodescorersscoreridversioncodeget) - Get Scorer Version Code
- [`promptsGetScorerVersionOrLatestScorersScorerIdVersionGet`](docs/sdks/data/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
- [`promptsGetScorerVersionOrLatestScorersScorerIdVersionGet`](docs/sdks/prompts/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
- [`promptsGetScorerVersionOrLatestScorersScorerIdVersionGet`](docs/sdks/rows/README.md#getscorerversionorlatestscorersscoreridversionget) - Get Scorer Version Or Latest
- [`promptsGetTemplateVersionByNameProjectsProjectIdTemplatesVersionsGet`](docs/sdks/prompts/README.md#gettemplateversionbynameprojectsprojectidtemplatesversionsget) - Get Template Version By Name
- [`promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet`](docs/sdks/data/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
- [`promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet`](docs/sdks/prompts/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
- [`promptsGetValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet`](docs/sdks/rows/README.md#getvalidatecodescorertaskresultscorerscodevalidatetaskidget) - Get Validate Code Scorer Task Result
- [`promptsListAllVersionsForScorerScorersScorerIdVersionsGet`](docs/sdks/data/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
- [`promptsListAllVersionsForScorerScorersScorerIdVersionsGet`](docs/sdks/prompts/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
- [`promptsListAllVersionsForScorerScorersScorerIdVersionsGet`](docs/sdks/rows/README.md#listallversionsforscorerscorersscoreridversionsget) - List All Versions For Scorer
- [`promptsListGroupPromptTemplateCollaboratorsTemplatesTemplateIdGroupsGet`](docs/sdks/prompts/README.md#listgroupprompttemplatecollaboratorstemplatestemplateidgroupsget) - List Group Prompt Template Collaborators
- [`promptsListProjectsForScorerRouteScorersScorerIdProjectsGet`](docs/sdks/data/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
- [`promptsListProjectsForScorerRouteScorersScorerIdProjectsGet`](docs/sdks/prompts/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
- [`promptsListProjectsForScorerRouteScorersScorerIdProjectsGet`](docs/sdks/rows/README.md#listprojectsforscorerroutescorersscoreridprojectsget) - List Projects For Scorer Route
- [`promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet`](docs/sdks/data/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
- [`promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet`](docs/sdks/prompts/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
- [`promptsListProjectsForScorerVersionRouteScorersVersionsScorerVersionIdProjectsGet`](docs/sdks/rows/README.md#listprojectsforscorerversionroutescorersversionsscorerversionidprojectsget) - List Projects For Scorer Version Route
- [`promptsListScorersWithFiltersScorersListPost`](docs/sdks/data/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
- [`promptsListScorersWithFiltersScorersListPost`](docs/sdks/prompts/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
- [`promptsListScorersWithFiltersScorersListPost`](docs/sdks/rows/README.md#listscorerswithfiltersscorerslistpost) - List Scorers With Filters
- [`promptsListTagsScorersTagsGet`](docs/sdks/data/README.md#listtagsscorerstagsget) - List Tags
- [`promptsListTagsScorersTagsGet`](docs/sdks/prompts/README.md#listtagsscorerstagsget) - List Tags
- [`promptsListTagsScorersTagsGet`](docs/sdks/rows/README.md#listtagsscorerstagsget) - List Tags
- [`promptsListUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersGet`](docs/sdks/prompts/README.md#listuserprompttemplatecollaboratorstemplatestemplateidusersget) - List User Prompt Template Collaborators
- [`promptsManualLlmValidateScorersLlmValidatePost`](docs/sdks/data/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
- [`promptsManualLlmValidateScorersLlmValidatePost`](docs/sdks/prompts/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
- [`promptsManualLlmValidateScorersLlmValidatePost`](docs/sdks/rows/README.md#manualllmvalidatescorersllmvalidatepost) - Manual Llm Validate
- [`promptsQueryTemplatesTemplatesQueryPost`](docs/sdks/prompts/README.md#querytemplatestemplatesquerypost) - Query Templates
- [`promptsQueryTemplateVersionsTemplatesTemplateIdVersionsQueryPost`](docs/sdks/prompts/README.md#querytemplateversionstemplatestemplateidversionsquerypost) - Query Template Versions
- [`promptsRenderTemplateRenderTemplatePost`](docs/sdks/prompts/README.md#rendertemplaterendertemplatepost) - Render Template
- [`promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost`](docs/sdks/data/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
- [`promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost`](docs/sdks/prompts/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
- [`promptsRestoreScorerVersionScorersScorerIdVersionsVersionNumberRestorePost`](docs/sdks/rows/README.md#restorescorerversionscorersscoreridversionsversionnumberrestorepost) - Restore Scorer Version
- [`promptsSetSelectedGlobalTemplateVersionTemplatesTemplateIdVersionsVersionPut`](docs/sdks/prompts/README.md#setselectedglobaltemplateversiontemplatestemplateidversionsversionput) - Set Selected Global Template Version
- [`promptsUpdateGlobalTemplateTemplatesTemplateIdPatch`](docs/sdks/prompts/README.md#updateglobaltemplatetemplatestemplateidpatch) - Update Global Template
- [`promptsUpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatch`](docs/sdks/prompts/README.md#updategroupprompttemplatecollaboratortemplatestemplateidgroupsgroupidpatch) - Update Group Prompt Template Collaborator
- [`promptsUpdateScorersScorerIdPatch`](docs/sdks/data/README.md#updatescorersscoreridpatch) - Update
- [`promptsUpdateScorersScorerIdPatch`](docs/sdks/prompts/README.md#updatescorersscoreridpatch) - Update
- [`promptsUpdateScorersScorerIdPatch`](docs/sdks/rows/README.md#updatescorersscoreridpatch) - Update
- [`promptsUpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatch`](docs/sdks/prompts/README.md#updateuserprompttemplatecollaboratortemplatestemplateidusersuseridpatch) - Update User Prompt Template Collaborator
- [`promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost`](docs/sdks/data/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
- [`promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost`](docs/sdks/prompts/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
- [`promptsValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost`](docs/sdks/rows/README.md#validatecodescorerlogrecordscorerscodevalidatelogrecordpost) - Validate Code Scorer Log Record
- [`promptsValidateCodeScorerScorersCodeValidatePost`](docs/sdks/data/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
- [`promptsValidateCodeScorerScorersCodeValidatePost`](docs/sdks/prompts/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
- [`promptsValidateCodeScorerScorersCodeValidatePost`](docs/sdks/rows/README.md#validatecodescorerscorerscodevalidatepost) - Validate Code Scorer
- [`promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost`](docs/sdks/data/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record
- [`promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost`](docs/sdks/prompts/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record
- [`promptsValidateLlmScorerLogRecordScorersLlmValidateLogRecordPost`](docs/sdks/rows/README.md#validatellmscorerlogrecordscorersllmvalidatelogrecordpost) - Validate Llm Scorer Log Record
- [`protectCreateStageProjectsProjectIdStagesPost`](docs/sdks/protect/README.md#createstageprojectsprojectidstagespost) - Create Stage
- [`protectCreateStageProjectsProjectIdStagesPost`](docs/sdks/stage/README.md#createstageprojectsprojectidstagespost) - Create Stage
- [`protectGetStageProjectsProjectIdStagesGet`](docs/sdks/protect/README.md#getstageprojectsprojectidstagesget) - Get Stage
- [`protectGetStageProjectsProjectIdStagesGet`](docs/sdks/stage/README.md#getstageprojectsprojectidstagesget) - Get Stage
- [`protectInvokeProtectInvokePost`](docs/sdks/protect/README.md#invokeprotectinvokepost) - Invoke
- [`protectPauseStageProjectsProjectIdStagesStageIdPut`](docs/sdks/protect/README.md#pausestageprojectsprojectidstagesstageidput) - Pause Stage
- [`protectPauseStageProjectsProjectIdStagesStageIdPut`](docs/sdks/stage/README.md#pausestageprojectsprojectidstagesstageidput) - Pause Stage
- [`protectUpdateStageProjectsProjectIdStagesStageIdPost`](docs/sdks/protect/README.md#updatestageprojectsprojectidstagesstageidpost) - Update Stage
- [`protectUpdateStageProjectsProjectIdStagesStageIdPost`](docs/sdks/stage/README.md#updatestageprojectsprojectidstagesstageidpost) - Update Stage
- [`runScorerSettingsGetSettingsProjectsProjectIdRunsRunIdScorerSettingsGet`](docs/sdks/runscorersettings/README.md#getsettingsprojectsprojectidrunsrunidscorersettingsget) - Get Settings
- [`runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch`](docs/sdks/runscorersettings/README.md#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspatch) - Upsert Scorers Config
- [`runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost`](docs/sdks/runscorersettings/README.md#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspost) - Upsert Scorers Config
- [`traceCountSessionsProjectsProjectIdSessionsCountPost`](docs/sdks/trace/README.md#countsessionsprojectsprojectidsessionscountpost) - Count Sessions
- [`traceCountSpansProjectsProjectIdSpansCountPost`](docs/sdks/trace/README.md#countspansprojectsprojectidspanscountpost) - Count Spans
- [`traceCountTracesProjectsProjectIdTracesCountPost`](docs/sdks/trace/README.md#counttracesprojectsprojectidtracescountpost) - Count Traces
- [`traceCreateSessionProjectsProjectIdSessionsPost`](docs/sdks/trace/README.md#createsessionprojectsprojectidsessionspost) - Create Session
- [`traceDeleteSessionsProjectsProjectIdSessionsDeletePost`](docs/sdks/trace/README.md#deletesessionsprojectsprojectidsessionsdeletepost) - Delete Sessions
- [`traceDeleteSpansProjectsProjectIdSpansDeletePost`](docs/sdks/trace/README.md#deletespansprojectsprojectidspansdeletepost) - Delete Spans
- [`traceDeleteTracesProjectsProjectIdTracesDeletePost`](docs/sdks/trace/README.md#deletetracesprojectsprojectidtracesdeletepost) - Delete Traces
- [`traceExportRecordsProjectsProjectIdExportRecordsPost`](docs/sdks/trace/README.md#exportrecordsprojectsprojectidexportrecordspost) - Export Records
- [`traceGetAggregatedTraceViewProjectsProjectIdTracesAggregatedPost`](docs/sdks/trace/README.md#getaggregatedtraceviewprojectsprojectidtracesaggregatedpost) - Get Aggregated Trace View
- [`traceGetSessionProjectsProjectIdSessionsSessionIdGet`](docs/sdks/trace/README.md#getsessionprojectsprojectidsessionssessionidget) - Get Session
- [`traceGetSpanProjectsProjectIdSpansSpanIdGet`](docs/sdks/trace/README.md#getspanprojectsprojectidspansspanidget) - Get Span
- [`traceGetTraceProjectsProjectIdTracesTraceIdGet`](docs/sdks/trace/README.md#gettraceprojectsprojectidtracestraceidget) - Get Trace
- [`traceLogSpansProjectsProjectIdSpansPost`](docs/sdks/trace/README.md#logspansprojectsprojectidspanspost) - Log Spans
- [`traceLogTracesProjectsProjectIdTracesPost`](docs/sdks/trace/README.md#logtracesprojectsprojectidtracespost) - Log Traces
- [`traceMetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost`](docs/sdks/trace/README.md#metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspost) - Metrics Testing Available Columns
- [`traceQueryMetricsProjectsProjectIdMetricsSearchPost`](docs/sdks/trace/README.md#querymetricsprojectsprojectidmetricssearchpost) - Query Metrics
- [`traceQueryPartialSessionsProjectsProjectIdSessionsPartialSearchPost`](docs/sdks/trace/README.md#querypartialsessionsprojectsprojectidsessionspartialsearchpost) - Query Partial Sessions
- [`traceQueryPartialSpansProjectsProjectIdSpansPartialSearchPost`](docs/sdks/trace/README.md#querypartialspansprojectsprojectidspanspartialsearchpost) - Query Partial Spans
- [`traceQueryPartialTracesProjectsProjectIdTracesPartialSearchPost`](docs/sdks/trace/README.md#querypartialtracesprojectsprojectidtracespartialsearchpost) - Query Partial Traces
- [`traceQuerySessionsProjectsProjectIdSessionsSearchPost`](docs/sdks/trace/README.md#querysessionsprojectsprojectidsessionssearchpost) - Query Sessions
- [`traceQuerySpansProjectsProjectIdSpansSearchPost`](docs/sdks/trace/README.md#queryspansprojectsprojectidspanssearchpost) - Query Spans
- [`traceQueryTracesProjectsProjectIdTracesSearchPost`](docs/sdks/trace/README.md#querytracesprojectsprojectidtracessearchpost) - Query Traces
- [`traceRecomputeMetricsProjectsProjectIdRecomputeMetricsPost`](docs/sdks/trace/README.md#recomputemetricsprojectsprojectidrecomputemetricspost) - Recompute Metrics
- [`traceSessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost`](docs/sdks/trace/README.md#sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspost) - Sessions Available Columns
- [`traceSpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost`](docs/sdks/trace/README.md#spansavailablecolumnsprojectsprojectidspansavailablecolumnspost) - Spans Available Columns
- [`traceTracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost`](docs/sdks/trace/README.md#tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspost) - Traces Available Columns
- [`traceUpdateSpanProjectsProjectIdSpansSpanIdPatch`](docs/sdks/trace/README.md#updatespanprojectsprojectidspansspanidpatch) - Update Span
- [`traceUpdateTraceProjectsProjectIdTracesTraceIdPatch`](docs/sdks/trace/README.md#updatetraceprojectsprojectidtracestraceidpatch) - Update Trace
- ~~[`datasetsDeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete`](docs/sdks/datasets/README.md#deletepromptdatasetprojectsprojectidpromptdatasetsdatasetiddelete)~~ - Delete Prompt Dataset :warning: **Deprecated**
- ~~[`datasetsDownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet`](docs/sdks/datasets/README.md#downloadpromptdatasetprojectsprojectidpromptdatasetsdatasetidget)~~ - Download Prompt Dataset :warning: **Deprecated**
- ~~[`datasetsListPromptDatasetsProjectsProjectIdPromptDatasetsGet`](docs/sdks/datasets/README.md#listpromptdatasetsprojectsprojectidpromptdatasetsget)~~ - List Prompt Datasets :warning: **Deprecated**
- ~~[`datasetsUpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut`](docs/sdks/datasets/README.md#updatepromptdatasetprojectsprojectidpromptdatasetsdatasetidput)~~ - Update Prompt Dataset :warning: **Deprecated**
- ~~[`datasetsUploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost`](docs/sdks/datasets/README.md#uploadpromptevaluationdatasetprojectsprojectidpromptdatasetspost)~~ - Upload Prompt Evaluation Dataset :warning: **Deprecated**
- ~~[`experimentListExperimentsProjectsProjectIdExperimentsGet`](docs/sdks/experiment/README.md#listexperimentsprojectsprojectidexperimentsget)~~ - List Experiments :warning: **Deprecated**
- ~~[`integrationsCreateOrUpdateUnityCatalogIntegrationIntegrationsDatabricksUnityCatalogSqlPut`](docs/sdks/integrations/README.md#createorupdateunitycatalogintegrationintegrationsdatabricksunitycatalogsqlput)~~ - Create Or Update Unity Catalog Integration :warning: **Deprecated**
- ~~[`logStreamListLogStreamsProjectsProjectIdLogStreamsGet`](docs/sdks/logstream/README.md#listlogstreamsprojectsprojectidlogstreamsget)~~ - List Log Streams :warning: **Deprecated**
- ~~[`projectsGetAllProjectsProjectsAllGet`](docs/sdks/projects/README.md#getallprojectsprojectsallget)~~ - Get All Projects :warning: **Deprecated**
- ~~[`projectsGetProjectsProjectsGet`](docs/sdks/projects/README.md#getprojectsprojectsget)~~ - Get Projects :warning: **Deprecated**
- ~~[`promptsCreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPost`](docs/sdks/prompts/README.md#createprompttemplateversionprojectsprojectidtemplatestemplateidversionspost)~~ - Create Prompt Template Version :warning: **Deprecated**
- ~~[`promptsDeleteTemplateProjectsProjectIdTemplatesTemplateIdDelete`](docs/sdks/prompts/README.md#deletetemplateprojectsprojectidtemplatestemplateiddelete)~~ - Delete Template :warning: **Deprecated**
- ~~[`promptsGetTemplateFromProjectProjectsProjectIdTemplatesTemplateIdGet`](docs/sdks/prompts/README.md#gettemplatefromprojectprojectsprojectidtemplatestemplateidget)~~ - Get Template From Project :warning: **Deprecated**
- ~~[`promptsGetTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionGet`](docs/sdks/prompts/README.md#gettemplateversionprojectsprojectidtemplatestemplateidversionsversionget)~~ - Get Template Version :warning: **Deprecated**
- ~~[`promptsSetSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut`](docs/sdks/prompts/README.md#setselectedtemplateversionprojectsprojectidtemplatestemplateidversionsversionput)~~ - Set Selected Template Version :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.createDatasetDatasetsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`GalileoGeneratedError`](./src/models/errors/galileogeneratederror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { GalileoGenerated } from "galileo-generated";
import * as errors from "galileo-generated/models/errors";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  try {
    const result = await galileoGenerated.auth.loginEmailLoginPost({
      username: "Araceli_Herzog",
      password: "vochafN1SS9zPdo",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.GalileoGeneratedError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`GalileoGeneratedError`](./src/models/errors/galileogeneratederror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`GalileoGeneratedError`](./src/models/errors/galileogeneratederror.ts)**:
* [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. Applicable to 201 of 259 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

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

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=galileo-generated&utm_campaign=typescript)
