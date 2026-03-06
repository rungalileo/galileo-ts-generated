# CountSpansProjectsProjectIdSpansCountPostRequest

## Example Usage

```typescript
import { CountSpansProjectsProjectIdSpansCountPostRequest } from "galileo-generated/models/operations";

let value: CountSpansProjectsProjectIdSpansCountPostRequest = {
  projectId: "<value>",
  body: {
    logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
    filters: [
      {
        columnId: "<id>",
        operator: "eq",
        value: "example input",
        caseSensitive: true,
        type: "text",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         | Example                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                                                                         | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |                                                                                                                                                                                     |
| `body`                                                                                                                                                                              | [models.LogRecordsQueryCountRequest](../../models/logrecordsquerycountrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 | {<br/>"filters": [<br/>{<br/>"case_sensitive": true,<br/>"name": "input",<br/>"operator": "eq",<br/>"type": "text",<br/>"value": "example input"<br/>}<br/>],<br/>"log_stream_id": "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db"<br/>} |