# TraceMetadata

## Example Usage

```typescript
import { TraceMetadata } from "galileo-generated/models";

let value: TraceMetadata = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier for the request.                          |
| `receivedAt`                                                | *number*                                                    | :heavy_minus_sign:                                          | Time the request was received by the server in nanoseconds. |
| `responseAt`                                                | *number*                                                    | :heavy_minus_sign:                                          | Time the response was sent by the server in nanoseconds.    |
| `executionTime`                                             | *number*                                                    | :heavy_minus_sign:                                          | Execution time for the request (in seconds).                |