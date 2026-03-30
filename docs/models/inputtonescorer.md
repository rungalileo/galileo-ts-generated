# InputToneScorer

## Example Usage

```typescript
import { InputToneScorer } from "galileo-generated/models";

let value: InputToneScorer = {
  name: "input_tone",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"input_tone"*                          | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.InputToneScorerFilter*[]        | :heavy_minus_sign:                      | List of filters to apply to the scorer. |