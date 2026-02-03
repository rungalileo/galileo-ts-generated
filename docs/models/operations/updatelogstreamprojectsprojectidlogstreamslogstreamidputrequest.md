# UpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPutRequest

## Example Usage

```typescript
import { UpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPutRequest } from "galileo-generated/models/operations";

let value: UpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPutRequest = {
  logStreamId: "<value>",
  projectId: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `logStreamId`                                                           | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `projectId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `body`                                                                  | [models.LogStreamUpdateRequest](../../models/logstreamupdaterequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |