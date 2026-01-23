# ListLogStreamResponse

## Example Usage

```typescript
import { ListLogStreamResponse } from "galileo-generated/models";

let value: ListLogStreamResponse = {
  logStreams: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `startingToken`                                              | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `paginated`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `nextStartingToken`                                          | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `logStreams`                                                 | [models.LogStreamResponse](../models/logstreamresponse.md)[] | :heavy_check_mark:                                           | N/A                                                          |