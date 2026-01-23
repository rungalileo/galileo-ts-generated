# Histogram

## Example Usage

```typescript
import { Histogram } from "galileo-generated/models";

let value: Histogram = {
  strategy: "quantile",
  edges: [],
  buckets: [],
  total: 572580,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `strategy`                                                                   | [models.HistogramStrategy](../models/histogramstrategy.md)                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `edges`                                                                      | *number*[]                                                                   | :heavy_check_mark:                                                           | List of bin edges (monotonically increasing, length = number of buckets + 1) |
| `buckets`                                                                    | [models.HistogramBucket](../models/histogrambucket.md)[]                     | :heavy_check_mark:                                                           | List of histogram buckets containing the binned data                         |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Total number of data points in the histogram                                 |