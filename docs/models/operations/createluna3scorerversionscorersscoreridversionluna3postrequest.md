# CreateLuna3ScorerVersionScorersScorerIdVersionLuna3PostRequest

## Example Usage

```typescript
import { CreateLuna3ScorerVersionScorersScorerIdVersionLuna3PostRequest } from "galileo-generated/models/operations";

let value: CreateLuna3ScorerVersionScorersScorerIdVersionLuna3PostRequest = {
  scorerId: "<value>",
  body: {
    instruction: "<value>",
    adapterPath: "<value>",
    classNameToVocabIx: {
      "key": [
        266623,
      ],
      "key1": [
        7588,
        20324,
      ],
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `scorerId`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.CreateLuna3ScorerVersionRequest](../../models/createluna3scorerversionrequest.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |