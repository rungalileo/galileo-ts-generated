# LogStreamCreatedAtFilter

## Example Usage

```typescript
import { LogStreamCreatedAtFilter } from "galileo-generated/models";

let value: LogStreamCreatedAtFilter = {
  name: "created_at",
  operator: "gt",
  value: new Date("2025-07-06T04:55:11.168Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *"created_at"*                                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operator`                                                                                    | [models.LogStreamCreatedAtFilterOperator](../models/logstreamcreatedatfilteroperator.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |