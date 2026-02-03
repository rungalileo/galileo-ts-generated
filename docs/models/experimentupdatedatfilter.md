# ExperimentUpdatedAtFilter

## Example Usage

```typescript
import { ExperimentUpdatedAtFilter } from "galileo-generated/models";

let value: ExperimentUpdatedAtFilter = {
  name: "updated_at",
  operator: "lte",
  value: new Date("2025-05-24T06:11:10.252Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"updated_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ExperimentUpdatedAtFilterOperator](../models/experimentupdatedatfilteroperator.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |