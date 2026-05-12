# BleuScorer

## Example Usage

```typescript
import { BleuScorer } from "galileo-generated/models";

let value: BleuScorer = {
  name: "bleu",
  filters: [
    {
      name: "metadata",
      operator: "ne",
      key: "<key>",
      value: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"bleu"*                                | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.BleuScorerFilter*[]             | :heavy_minus_sign:                      | List of filters to apply to the scorer. |