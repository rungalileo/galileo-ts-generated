# OutputPIIScorer

## Example Usage

```typescript
import { OutputPIIScorer } from "galileo-generated/models";

let value: OutputPIIScorer = {
  name: "output_pii",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"output_pii"*                          | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.OutputPIIScorerFilter*[]        | :heavy_minus_sign:                      | List of filters to apply to the scorer. |