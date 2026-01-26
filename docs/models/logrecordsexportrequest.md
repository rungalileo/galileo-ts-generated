# LogRecordsExportRequest

Request schema for exporting log records (sessions, traces, spans).

## Example Usage

```typescript
import { LogRecordsExportRequest } from "galileo-generated/models";

let value: LogRecordsExportRequest = {
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
  columnIds: [
    "input",
    "output",
    "created_at",
  ],
  exportFormat: "jsonl",
  rootType: "trace",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `logStreamId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Log stream id associated with the traces.                                         |
| `experimentId`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Experiment id associated with the traces.                                         |
| `metricsTestingId`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | Metrics testing id associated with the traces.                                    |
| `filters`                                                                         | *models.LogRecordsExportRequestFilter*[]                                          | :heavy_minus_sign:                                                                | Filters to apply on the export                                                    |
| `sort`                                                                            | [models.LogRecordsSortClause](../models/logrecordssortclause.md)                  | :heavy_minus_sign:                                                                | Sort clause for the export.  Defaults to native sort (created_at, id descending). |
| `columnIds`                                                                       | *string*[]                                                                        | :heavy_minus_sign:                                                                | Column IDs to include in export                                                   |
| `exportFormat`                                                                    | [models.LLMExportFormat](../models/llmexportformat.md)                            | :heavy_minus_sign:                                                                | N/A                                                                               |
| `rootType`                                                                        | [models.RootType](../models/roottype.md)                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `redact`                                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | Redact sensitive data                                                             |
| `fileName`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Optional filename for the exported file                                           |