# ExperimentMetricsResponse

## Example Usage

```typescript
import { ExperimentMetricsResponse } from "galileo-generated/models";

let value: ExperimentMetricsResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `metrics`                                                                       | [models.BucketedMetric](../models/bucketedmetric.md)[]                          | :heavy_minus_sign:                                                              | List of metrics for the experiment, including categorical and quartile metrics. |