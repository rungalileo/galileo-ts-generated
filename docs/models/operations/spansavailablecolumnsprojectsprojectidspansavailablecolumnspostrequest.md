# SpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPostRequest

## Example Usage

```typescript
import { SpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPostRequest } from "galileo-generated/models/operations";

let value:
  SpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPostRequest = {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
    },
  };
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `body`                                                                                        | [models.LogRecordsAvailableColumnsRequest](../../models/logrecordsavailablecolumnsrequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"log_stream_id": "00000000-0000-0000-0000-000000000000"<br/>}                           |