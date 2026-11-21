# OutputToneScorer

## Example Usage

```typescript
import { OutputToneScorer } from "galileo-generated/models";

let value: OutputToneScorer = {
  name: "output_tone",
  filters: [
    {
      name: "metadata",
      operator: "regex",
      key: "<key>",
      value: [],
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"output_tone"*                         | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.OutputToneScorerFilter*[]       | :heavy_minus_sign:                      | List of filters to apply to the scorer. |