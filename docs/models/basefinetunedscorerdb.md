# BaseFinetunedScorerDB

## Example Usage

```typescript
import { BaseFinetunedScorerDB } from "galileo-generated/models";

let value: BaseFinetunedScorerDB = {
  id: "<value>",
  name: "<value>",
  loraTaskId: 751404,
  prompt: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `loraTaskId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `loraWeightsPath`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `prompt`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `lunaInputType`                                                                                      | [models.LunaInputTypeEnum](../models/lunainputtypeenum.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `lunaOutputType`                                                                                     | [models.LunaOutputTypeEnum](../models/lunaoutputtypeenum.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `classNameToVocabIx`                                                                                 | *models.BaseFinetunedScorerDBClassNameToVocabIx*                                                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `executor`                                                                                           | [models.ScorerName](../models/scorername.md)                                                         | :heavy_minus_sign:                                                                                   | Executor pipeline. Defaults to finetuned scorer pipeline but can run custom galileo score pipelines. |