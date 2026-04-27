# ControlResult

## Example Usage

```typescript
import { ControlResult } from "galileo-generated/models";

let value: ControlResult = {
  action: "deny",
  matched: true,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.ControlAction](../models/controlaction.md)                                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `matched`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether the control matched. False covers both non-match and error cases; use error_message to distinguish errors. |
| `confidence`                                                                                                       | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Confidence score reported by the control evaluation result.                                                        |
| `errorMessage`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Error text when control evaluation failed. This should be null for normal matches and non-matches.                 |