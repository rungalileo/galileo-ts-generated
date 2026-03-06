# StageDB

## Example Usage

```typescript
import { StageDB } from "galileo-generated/models";

let value: StageDB = {
  name: "<value>",
  projectId: "<value>",
  createdBy: "<value>",
  id: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Name of the stage. Must be unique within the project.                    |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | ID of the project to which this stage belongs.                           |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Optional human-readable description of the goals of this guardrail.      |
| `type`                                                                   | [models.StageType](../models/stagetype.md)                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `paused`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the action is enabled. If False, the action will not be applied. |
| `createdBy`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |