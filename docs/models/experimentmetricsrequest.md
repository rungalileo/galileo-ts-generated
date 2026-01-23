# ExperimentMetricsRequest

## Example Usage

```typescript
import { ExperimentMetricsRequest } from "galileo-generated/models";

let value: ExperimentMetricsRequest = {
  filters: [
    {
      columnId: "<id>",
      operator: "eq",
      value: "example input",
      caseSensitive: true,
      type: "text",
    },
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `filters`                                 | *models.ExperimentMetricsRequestFilter*[] | :heavy_minus_sign:                        | N/A                                       |