# ScorerUpdatedAtFilter

## Example Usage

```typescript
import { ScorerUpdatedAtFilter } from "galileo-generated/models";

let value: ScorerUpdatedAtFilter = {
  name: "updated_at",
  operator: "ne",
  value: new Date("2024-12-15T08:47:56.823Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"updated_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ScorerUpdatedAtFilterOperator](../models/scorerupdatedatfilteroperator.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |