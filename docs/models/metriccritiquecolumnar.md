# MetricCritiqueColumnar

## Example Usage

```typescript
import { MetricCritiqueColumnar } from "galileo-generated/models";

let value: MetricCritiqueColumnar = {
  id: "<value>",
  isComputed: true,
  revisedExplanation: "<value>",
  critiqueInfo: {
    critique: "<value>",
    intendedValue: true,
    originalExplanation: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `isComputed`                                                       | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `revisedExplanation`                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `critiqueInfo`                                                     | [models.MetricCritiqueContent](../models/metriccritiquecontent.md) | :heavy_check_mark:                                                 | N/A                                                                |