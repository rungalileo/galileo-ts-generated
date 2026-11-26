# RunEvaluatorBinding

## Example Usage

```typescript
import { RunEvaluatorBinding } from "galileo-generated/models";

let value: RunEvaluatorBinding = {
  scorerId: "<value>",
  name: "<value>",
  label: "<value>",
  enabled: false,
  compatible: false,
  outputType: "<value>",
  scoreableNodeTypes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  requiredMetricIds: [],
  filters: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `scorerId`           | *string*             | :heavy_check_mark:   | N/A                  |
| `scorerVersionId`    | *string*             | :heavy_minus_sign:   | N/A                  |
| `name`               | *string*             | :heavy_check_mark:   | N/A                  |
| `label`              | *string*             | :heavy_check_mark:   | N/A                  |
| `enabled`            | *boolean*            | :heavy_check_mark:   | N/A                  |
| `compatible`         | *boolean*            | :heavy_check_mark:   | N/A                  |
| `outputType`         | *string*             | :heavy_check_mark:   | N/A                  |
| `scoreableNodeTypes` | *string*[]           | :heavy_check_mark:   | N/A                  |
| `requiredMetricIds`  | *string*[]           | :heavy_check_mark:   | N/A                  |
| `filters`            | *any*[]              | :heavy_check_mark:   | N/A                  |