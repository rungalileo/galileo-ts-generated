# FilterParams

## Example Usage

```typescript
import { FilterParams } from "galileo-generated/models";

let value: FilterParams = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `ids`                                                | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `similarTo`                                          | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `numSimilarTo`                                       | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `textPat`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `regex`                                              | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `dataErrorPotentialHigh`                             | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `dataErrorPotentialLow`                              | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `misclassifiedOnly`                                  | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `goldFilter`                                         | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `predFilter`                                         | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `metaFilter`                                         | [models.MetaFilter](../models/metafilter.md)[]       | :heavy_minus_sign:                                   | N/A                                                  |
| `driftScoreThreshold`                                | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `isDrifted`                                          | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `spanSampleIds`                                      | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `spanText`                                           | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `spanRegex`                                          | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `excludeIds`                                         | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `lasso`                                              | [models.LassoSelection](../models/lassoselection.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `classFilter`                                        | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `likelyMislabeled`                                   | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `likelyMislabeledDepPercentile`                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `cboClusters`                                        | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `dataEmbs`                                           | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `confidenceHigh`                                     | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `confidenceLow`                                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `isOtb`                                              | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `imageIds`                                           | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `clusterIds`                                         | *number*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `correctlyClassified`                                | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `isEdited`                                           | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |