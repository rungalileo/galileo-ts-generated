# CodeMetricGenerationStatusResponse

Lightweight polling response.

## Example Usage

```typescript
import { CodeMetricGenerationStatusResponse } from "galileo-generated/models";

let value: CodeMetricGenerationStatusResponse = {
  id: "<value>",
  status: "generating",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [models.CodeMetricGenerationStatus](../models/codemetricgenerationstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `generatedCode`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `errorMessage`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |