# SystemMetricInfo

## Example Usage

```typescript
import { SystemMetricInfo } from "galileo-generated/models";

let value: SystemMetricInfo = {
  name: "<value>",
  label: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | Unique identifier for the metric                            |
| `label`                                                     | *string*                                                    | :heavy_check_mark:                                          | Human-readable display name for the metric                  |
| `unit`                                                      | [models.DataUnit](../models/dataunit.md)                    | :heavy_minus_sign:                                          | Unit of measurement, if any                                 |
| `values`                                                    | *number*[]                                                  | :heavy_minus_sign:                                          | Raw metric values used to compute statistics and histograms |
| `mean`                                                      | *number*                                                    | :heavy_minus_sign:                                          | Arithmetic mean of the metric values                        |
| `median`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Median (50th percentile) of the metric values               |
| `p5`                                                        | *number*                                                    | :heavy_minus_sign:                                          | 5th percentile of the metric values                         |
| `p25`                                                       | *number*                                                    | :heavy_minus_sign:                                          | 25th percentile (first quartile) of the metric values       |
| `p75`                                                       | *number*                                                    | :heavy_minus_sign:                                          | 75th percentile (third quartile) of the metric values       |
| `p95`                                                       | *number*                                                    | :heavy_minus_sign:                                          | 95th percentile of the metric values                        |
| `min`                                                       | *number*                                                    | :heavy_minus_sign:                                          | Minimum value in the metric dataset                         |
| `max`                                                       | *number*                                                    | :heavy_minus_sign:                                          | Maximum value in the metric dataset                         |
| `histogram`                                                 | [models.Histogram](../models/histogram.md)                  | :heavy_minus_sign:                                          | Histogram representation of the metric distribution         |