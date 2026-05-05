# CreateCodeMetricGenerationResponse

Response with generation ID for polling.

## Example Usage

```typescript
import { CreateCodeMetricGenerationResponse } from "galileo-generated/models";

let value: CreateCodeMetricGenerationResponse = {
  id: "<value>",
  status: "failed",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `status`                                                                     | [models.CodeMetricGenerationStatus](../models/codemetricgenerationstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |