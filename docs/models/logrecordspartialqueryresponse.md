# LogRecordsPartialQueryResponse

## Example Usage

```typescript
import { LogRecordsPartialQueryResponse } from "galileo-generated/models";

let value: LogRecordsPartialQueryResponse = {
  paginated: true,
  nextStartingToken: 2,
  records: [
    {
      type: "trace",
      input: "Who is a smart LLM?",
      name: "",
      createdAt: new Date("2026-11-24T17:47:07.142094Z"),
      userMetadata: {},
      tags: [],
      metrics: {},
      datasetMetadata: {},
      id: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      feedbackRatingInfo: {},
      annotations: {},
      fileIds: [],
      fileModalities: [],
      annotationAggregates: {},
      annotationAgreement: {},
      annotationQueueIds: [],
      progressMessage: "",
      errorMessage: "",
      isComplete: true,
    },
    {
      type: "llm",
      input: [
        {
          content: "Who is a smart LLM?",
          role: "user",
        },
      ],
      output: {
        content: "",
        role: "assistant",
      },
      name: "",
      createdAt: new Date("2026-11-24T17:47:07.142206Z"),
      userMetadata: {},
      tags: [],
      metrics: {},
      datasetMetadata: {},
      id: "1edc2401-24b4-448c-a392-b36932293061",
      feedbackRatingInfo: {},
      annotations: {},
      fileIds: [],
      fileModalities: [],
      annotationAggregates: {},
      annotationAgreement: {},
      annotationQueueIds: [],
      progressMessage: "",
      errorMessage: "",
      isComplete: true,
    },
  ],
  numRecords: 593694,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `startingToken`                                 | *number*                                        | :heavy_minus_sign:                              | N/A                                             |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | N/A                                             |
| `paginated`                                     | *boolean*                                       | :heavy_minus_sign:                              | N/A                                             |
| `nextStartingToken`                             | *number*                                        | :heavy_minus_sign:                              | N/A                                             |
| `lastRowId`                                     | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `records`                                       | *models.LogRecordsPartialQueryResponseRecord*[] | :heavy_minus_sign:                              | records matching the query                      |
| `numRecords`                                    | *number*                                        | :heavy_check_mark:                              | number of records                               |