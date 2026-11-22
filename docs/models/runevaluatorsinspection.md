# RunEvaluatorsInspection

## Example Usage

```typescript
import { RunEvaluatorsInspection } from "galileo-generated/models";

let value: RunEvaluatorsInspection = {
  projectId: "<value>",
  logStreamId: "<value>",
  logStreamName: "<value>",
  bindings: [],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `logStreamId`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `logStreamName`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `bindings`                                                       | [models.RunEvaluatorBinding](../models/runevaluatorbinding.md)[] | :heavy_check_mark:                                               | N/A                                                              |