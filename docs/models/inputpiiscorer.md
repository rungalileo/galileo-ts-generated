# InputPIIScorer

## Example Usage

```typescript
import { InputPIIScorer } from "galileo-generated/models";

let value: InputPIIScorer = {
  name: "input_pii",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"input_pii"*                           | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.InputPIIScorerFilter*[]         | :heavy_minus_sign:                      | List of filters to apply to the scorer. |