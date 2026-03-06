# ProjectCreatedAtFilter

## Example Usage

```typescript
import { ProjectCreatedAtFilter } from "galileo-generated/models";

let value: ProjectCreatedAtFilter = {
  name: "created_at",
  operator: "gte",
  value: new Date("2026-10-20T11:22:42.917Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"created_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.ProjectCreatedAtFilterOperator](../models/projectcreatedatfilteroperator.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |