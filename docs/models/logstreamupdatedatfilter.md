# LogStreamUpdatedAtFilter

## Example Usage

```typescript
import { LogStreamUpdatedAtFilter } from "galileo-generated/models";

let value: LogStreamUpdatedAtFilter = {
  name: "updated_at",
  operator: "eq",
  value: new Date("2024-01-21T08:13:05.046Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"updated_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.LogStreamUpdatedAtFilterOperator](../models/logstreamupdatedatfilteroperator.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |