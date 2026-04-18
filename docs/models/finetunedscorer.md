# FineTunedScorer

## Example Usage

```typescript
import { FineTunedScorer } from "galileo-generated/models";

let value: FineTunedScorer = {
  filters: [
    {
      name: "modality",
      operator: "not_in",
      value: "ENUM_VALUE",
    },
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_minus_sign:               | N/A                              |
| `name`                           | *string*                         | :heavy_minus_sign:               | N/A                              |
| `filters`                        | *models.FineTunedScorerFilter*[] | :heavy_minus_sign:               | N/A                              |