# BaseLuna3ScorerDB

## Example Usage

```typescript
import { BaseLuna3ScorerDB } from "galileo-generated/models";

let value: BaseLuna3ScorerDB = {
  instruction: "<value>",
  adapterPath: "<value>",
  classNameToVocabIx: {
    "key": [
      677647,
      894488,
      899747,
    ],
    "key1": [
      356637,
    ],
    "key2": [
      521795,
      282603,
    ],
  },
  id: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `instruction`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `adapterPath`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `classNameToVocabIx`       | Record<string, *number*[]> | :heavy_check_mark:         | N/A                        |
| `threshold`                | *number*                   | :heavy_minus_sign:         | N/A                        |
| `id`                       | *string*                   | :heavy_check_mark:         | N/A                        |