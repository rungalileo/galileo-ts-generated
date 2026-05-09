# HealthScoreResult

## Example Usage

```typescript
import { HealthScoreResult } from "galileo-generated/models";

let value: HealthScoreResult = {
  healthScoreType: "mae",
  value: 4820.6,
  skippedRows: 458481,
  secondary: {
    "key": 3364.93,
    "key1": 8281.63,
    "key2": 1781.68,
  },
  totalScoredRows: 789830,
  totalMgtRows: 838366,
  joinedRows: 874698,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `healthScoreType`                                              | [models.HealthScoreType](../models/healthscoretype.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `value`                                                        | *number*                                                       | :heavy_check_mark:                                             | Primary health score metric value, or None if no valid rows.   |
| `skippedRows`                                                  | *number*                                                       | :heavy_check_mark:                                             | Rows excluded because MGT or score could not be parsed.        |
| `secondary`                                                    | Record<string, *number*>                                       | :heavy_check_mark:                                             | Secondary metrics (MAE, RMSE, R², per-class F1, etc.).         |
| `totalScoredRows`                                              | *number*                                                       | :heavy_check_mark:                                             | Rows with a successful scorer result.                          |
| `totalMgtRows`                                                 | *number*                                                       | :heavy_check_mark:                                             | Rows with a non-null MGT value after overlay.                  |
| `joinedRows`                                                   | *number*                                                       | :heavy_check_mark:                                             | Rows with both a score and a MGT value (used for computation). |