# CreateLuna3ScorerVersionRequest

Immutable LUNA 3 execution fields for a new scorer version.

## Example Usage

```typescript
import { CreateLuna3ScorerVersionRequest } from "galileo-generated/models";

let value: CreateLuna3ScorerVersionRequest = {
  instruction: "<value>",
  adapterPath: "<value>",
  classNameToVocabIx: {
    "key": [
      456715,
    ],
    "key1": [
      952732,
      98363,
      960297,
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `instruction`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `adapterPath`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `classNameToVocabIx`       | Record<string, *number*[]> | :heavy_check_mark:         | N/A                        |
| `threshold`                | *number*                   | :heavy_minus_sign:         | N/A                        |