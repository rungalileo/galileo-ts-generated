# LogRecordsQueryResponse

## Example Usage

```typescript
import { LogRecordsQueryResponse } from "galileo-generated/models";

let value: LogRecordsQueryResponse = {
  paginated: true,
  nextStartingToken: 2,
  records: [
    {
      type: "trace",
      input: "Who is a smart LLM?",
      output: "I am",
      name: "",
      createdAt: new Date("2026-04-10T20:20:28.051206Z"),
      userMetadata: {},
      tags: [],
      metrics: {
        durationNs: 4,
      },
      datasetMetadata: {},
      id: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      sessionId: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      traceId: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      projectId: "0d4e3799-3861-4759-875f-9ae14c167b0a",
      runId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      feedbackRatingInfo: {},
      annotations: {},
      fileIds: [],
      fileModalities: [],
      annotationAggregates: {},
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
        content: "I am",
        role: "user",
      },
      name: "",
      createdAt: new Date("2026-04-10T20:20:28.051429Z"),
      userMetadata: {},
      tags: [],
      metrics: {
        durationNs: 4,
        numInputTokens: 4,
        numOutputTokens: 2,
        numTotalTokens: 6,
      },
      datasetMetadata: {},
      id: "1edc2401-24b4-448c-a392-b36932293061",
      sessionId: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      traceId: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      projectId: "0d4e3799-3861-4759-875f-9ae14c167b0a",
      runId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      feedbackRatingInfo: {},
      annotations: {},
      fileIds: [],
      fileModalities: [],
      annotationAggregates: {},
      annotationQueueIds: [],
      parentId: "1a0939d1-8b43-4fe3-a91c-196e2d9847e3",
      isComplete: true,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `startingToken`                          | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `limit`                                  | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `paginated`                              | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `nextStartingToken`                      | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `lastRowId`                              | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `records`                                | *models.LogRecordsQueryResponseRecord*[] | :heavy_minus_sign:                       | records matching the query               |