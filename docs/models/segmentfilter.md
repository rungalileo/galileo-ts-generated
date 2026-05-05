# SegmentFilter

## Example Usage

```typescript
import { SegmentFilter } from "galileo-generated/models";

let value: SegmentFilter = {
  filter: {
    name: "node_name",
    operator: "eq",
    value: [
      "<value 1>",
      "<value 2>",
    ],
    caseSensitive: true,
  },
  sampleRate: 762.78,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `filter`                                                                | *models.SegmentFilterFilter*                                            | :heavy_minus_sign:                                                      | Filter to apply to the segment. By default sample on all data.          |
| `sampleRate`                                                            | *number*                                                                | :heavy_check_mark:                                                      | The fraction of the data to sample. Must be between 0 and 1, inclusive. |
| `llmScorers`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether to sample only on LLM scorers.                                  |