# StageRulesetsResponse

The rulesets of a stage's current version, or a local stage's newest version.

## Example Usage

```typescript
import { StageRulesetsResponse } from "galileo-generated/models";

let value: StageRulesetsResponse = {
  stageId: "<value>",
  stageType: "central",
  version: 210266,
  rulesets: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `stageId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `stageType`                                                                                        | [models.StageType](../models/stagetype.md)                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `version`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | The stage version the rulesets come from. None for a local stage that no invoke has reached yet.   |
| `rulesets`                                                                                         | [models.Ruleset](../models/ruleset.md)[]                                                           | :heavy_check_mark:                                                                                 | The rulesets of the version. Protect stores no ruleset order, so the list order is not a priority. |