# GetScorerScorersScorerIdGetRequest

## Example Usage

```typescript
import { GetScorerScorersScorerIdGetRequest } from "galileo-generated/models/operations";

let value: GetScorerScorersScorerIdGetRequest = {
  scorerId: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scorerId`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `actions`                                                    | [models.ScorerAction](../../models/scoreraction.md)[]        | :heavy_minus_sign:                                           | Actions to include in the 'permissions' field of the scorer. |