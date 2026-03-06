# ProjectUpdatedAtFilter

## Example Usage

```typescript
import { ProjectUpdatedAtFilter } from "galileo-generated/models";

let value: ProjectUpdatedAtFilter = {
  name: "updated_at",
  operator: "lte",
  value: new Date("2024-03-24T10:13:25.209Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"updated_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ProjectUpdatedAtFilterOperator](../models/projectupdatedatfilteroperator.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |