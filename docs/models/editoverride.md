# EditOverride

A class for specifying conflict overrides during an edit export request.

If 2 edits in an edit export request are making edits on conflicting sample IDs, (ie edit 1 removes samples
(1,2,3,4) and edit 2 relabels sample 2, that would be a conflict), the override allows us to bypass the conflict.
The sample_ids correspond to the samples in the dataset of the run being exported.

## Example Usage

```typescript
import { EditOverride } from "galileo-generated/models";

let value: EditOverride = {
  editAction: "relabel",
  sampleIds: [
    245811,
    612105,
  ],
  projectId: "<value>",
  runId: "<value>",
  split: "validation",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `task`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `newLabel`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `searchString`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `textReplacement`                                          | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `useRegex`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `shiftSpanStartNumWords`                                   | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `shiftSpanEndNumWords`                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `editSpans`                                                | Record<string, [models.EditSpan](../models/editspan.md)[]> | :heavy_minus_sign:                                         | N/A                                                        |
| `note`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `editAction`                                               | [models.EditAction](../models/editaction.md)               | :heavy_check_mark:                                         | The available actions you can take in an edit.             |
| `sampleIds`                                                | *number*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `filter`                                                   | [models.FilterParams](../models/filterparams.md)           | :heavy_minus_sign:                                         | N/A                                                        |
| `mapThreshold`                                             | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `inferenceName`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `runId`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `split`                                                    | [models.Split](../models/split.md)                         | :heavy_check_mark:                                         | N/A                                                        |
| `createdBy`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |