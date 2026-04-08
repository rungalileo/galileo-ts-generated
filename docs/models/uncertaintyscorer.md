# UncertaintyScorer

## Example Usage

```typescript
import { UncertaintyScorer } from "galileo-generated/models";

let value: UncertaintyScorer = {
  name: "uncertainty",
  filters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"uncertainty"*                         | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.UncertaintyScorerFilter*[]      | :heavy_minus_sign:                      | List of filters to apply to the scorer. |