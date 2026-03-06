# StandardError

## Example Usage

```typescript
import { StandardError } from "galileo-generated/models";

let value: StandardError = {
  errorCode: 510790,
  errorType: "credentials_error",
  errorGroup: "<value>",
  severity: "low",
  message: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `errorCode`                                        | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `errorType`                                        | [models.ErrorType](../models/errortype.md)         | :heavy_check_mark:                                 | N/A                                                |
| `errorGroup`                                       | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `severity`                                         | [models.ErrorSeverity](../models/errorseverity.md) | :heavy_check_mark:                                 | Error severity levels for catalog entries.         |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `userAction`                                       | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `documentationLink`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `retriable`                                        | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `blocking`                                         | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `httpStatusCode`                                   | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `sourceService`                                    | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `context`                                          | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |