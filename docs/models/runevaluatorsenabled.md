# RunEvaluatorsEnabled

## Example Usage

```typescript
import { RunEvaluatorsEnabled } from "galileo-generated/models";

let value: RunEvaluatorsEnabled = {
  projectId: "<value>",
  logStreamId: "<value>",
  evaluators: [
    {
      scorerId: "<value>",
      scoreableNodeTypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `logStreamId`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `evaluators`                                                     | [models.RunEnabledEvaluator](../models/runenabledevaluator.md)[] | :heavy_check_mark:                                               | N/A                                                              |