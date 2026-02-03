# BaseMetricRollUpConfigDB

Configuration for rolling up metrics to parent/trace/session.

## Example Usage

```typescript
import { BaseMetricRollUpConfigDB } from "galileo-generated/models";

let value: BaseMetricRollUpConfigDB = {
  rollUpMethods: [],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `rollUpMethods`                                                                                                         | *models.BaseMetricRollUpConfigDBRollUpMethods*                                                                          | :heavy_check_mark:                                                                                                      | List of roll up methods to apply to the metric. For numeric scorers we support doing multiple roll up types per metric. |