# CreateCustomLunaScorerVersionRequest

## Example Usage

```typescript
import { CreateCustomLunaScorerVersionRequest } from "galileo-generated/models";

let value: CreateCustomLunaScorerVersionRequest = {
  loraTaskId: 963818,
  prompt: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `loraTaskId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prompt`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `loraWeightsPath`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `executor`                                                                                           | [models.ScorerName](../models/scorername.md)                                                         | :heavy_minus_sign:                                                                                   | Executor pipeline. Defaults to finetuned scorer pipeline but can run custom galileo score pipelines. |
| `lunaInputType`                                                                                      | [models.LunaInputTypeEnum](../models/lunainputtypeenum.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `lunaOutputType`                                                                                     | [models.LunaOutputTypeEnum](../models/lunaoutputtypeenum.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |