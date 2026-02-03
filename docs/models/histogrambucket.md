# HistogramBucket

## Example Usage

```typescript
import { HistogramBucket } from "galileo-generated/models";

let value: HistogramBucket = {
  lower: 9869.03,
  upper: 8836.29,
  count: 773735,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `lower`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Lower bound of the histogram bucket (inclusive)                                    |
| `upper`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Upper bound of the histogram bucket (exclusive, but inclusive for the last bucket) |
| `count`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Number of data points that fall within this bucket                                 |