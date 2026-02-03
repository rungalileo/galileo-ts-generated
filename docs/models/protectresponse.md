# ProtectResponse

Protect response schema with custom OpenAPI title.

## Example Usage

```typescript
import { ProtectResponse } from "galileo-generated/models";

let value: ProtectResponse = {
  text: "<value>",
  traceMetadata: {},
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [models.ExecutionStatus](../models/executionstatus.md) | :heavy_minus_sign:                                     | Status of the execution.                               |
| `text`                                                 | *string*                                               | :heavy_check_mark:                                     | Text from the request after processing the rules.      |
| `traceMetadata`                                        | [models.TraceMetadata](../models/tracemetadata.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `additionalProperties`                                 | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |