# OutputPIIScorer

## Example Usage

```typescript
import { OutputPIIScorer } from "galileo-generated/models";

let value: OutputPIIScorer = {
  name: "output_pii",
  filters: [
    {
      name: "node_name",
      operator: "contains",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"output_pii"*                          | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.OutputPIIScorerFilter*[]        | :heavy_minus_sign:                      | List of filters to apply to the scorer. |