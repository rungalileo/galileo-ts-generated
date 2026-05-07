# ComputeHealthScoreRequest

## Example Usage

```typescript
import { ComputeHealthScoreRequest } from "galileo-generated/models";

let value: ComputeHealthScoreRequest = {
  scorerId: "<value>",
  outputType: "discrete",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `scorerId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `outputType`                                                                        | [models.OutputTypeEnum](../models/outputtypeenum.md)                                | :heavy_check_mark:                                                                  | Enumeration of output types.                                                        |
| `scoreableNodeTypes`                                                                | [models.StepType](../models/steptype.md)[]                                          | :heavy_minus_sign:                                                                  | The scorer's scoreable_node_types. Determines which record type carries the score.  |
| `mgtOverlay`                                                                        | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | Client-side pending MGT edits: {row_id: value}. Overrides committed dataset values. |