# ScorerCreatedAtFilter

## Example Usage

```typescript
import { ScorerCreatedAtFilter } from "galileo-generated/models";

let value: ScorerCreatedAtFilter = {
  name: "created_at",
  operator: "ne",
  value: new Date("2025-12-12T14:18:48.091Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"created_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ScorerCreatedAtFilterOperator](../models/scorercreatedatfilteroperator.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |