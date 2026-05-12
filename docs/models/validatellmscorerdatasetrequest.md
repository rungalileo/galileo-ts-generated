# ValidateLLMScorerDatasetRequest

Request to validate a new LLM scorer against a dataset.

## Example Usage

```typescript
import { ValidateLLMScorerDatasetRequest } from "galileo-generated/models";

let value: ValidateLLMScorerDatasetRequest = {
  query: "<value>",
  response: "<value>",
  chainPollTemplate: {
    template: "<value>",
  },
  scorerConfiguration: {},
  userPrompt: "<value>",
  datasetId: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `query`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `response`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `chainPollTemplate`                                                                                   | [models.ChainPollTemplate](../models/chainpolltemplate.md)                                            | :heavy_check_mark:                                                                                    | Template for a chainpoll metric prompt,<br/>containing all the info necessary to send a chainpoll prompt. |
| `scorerConfiguration`                                                                                 | [models.GeneratedScorerConfiguration](../models/generatedscorerconfiguration.md)                      | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userPrompt`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `datasetId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `datasetVersionIndex`                                                                                 | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `limit`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Maximum number of dataset rows to process.                                                            |
| `startingToken`                                                                                       | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Pagination offset into dataset rows.                                                                  |
| `sort`                                                                                                | Record<string, *any*>                                                                                 | :heavy_minus_sign:                                                                                    | Optional sort configuration for dataset rows.                                                         |