# ExperimentCreatedAtFilter

## Example Usage

```typescript
import { ExperimentCreatedAtFilter } from "galileo-generated/models";

let value: ExperimentCreatedAtFilter = {
  name: "created_at",
  operator: "ne",
  value: new Date("2026-12-07T11:55:26.708Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"created_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ExperimentCreatedAtFilterOperator](../models/experimentcreatedatfilteroperator.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |