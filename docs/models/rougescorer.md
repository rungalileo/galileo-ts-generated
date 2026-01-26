# RougeScorer

## Example Usage

```typescript
import { RougeScorer } from "galileo-generated/models";

let value: RougeScorer = {
  name: "rouge",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"rouge"*                               | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.RougeScorerFilter*[]            | :heavy_minus_sign:                      | List of filters to apply to the scorer. |