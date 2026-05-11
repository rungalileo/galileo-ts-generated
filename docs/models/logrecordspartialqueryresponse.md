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
      createdAt: new Date("2026-05-09T07:51:49.156827Z"),
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
      createdAt: new Date("2026-05-09T07:51:49.156946Z"),
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
      isComplete: true,
    },
  ],
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