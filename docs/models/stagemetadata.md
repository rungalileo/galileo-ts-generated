# StageMetadata

## Example Usage

```typescript
import { StageMetadata } from "galileo-generated/models";

let value: StageMetadata = {
  projectId: "<value>",
  stageId: "<value>",
  stageName: "<value>",
  stageVersion: 818467,
  stageType: "central",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `projectId`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `stageId`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `stageName`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `stageVersion`                             | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `stageType`                                | [models.StageType](../models/stagetype.md) | :heavy_check_mark:                         | N/A                                        |