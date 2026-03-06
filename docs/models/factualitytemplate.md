# FactualityTemplate

## Example Usage

```typescript
import { FactualityTemplate } from "galileo-generated/models";

let value: FactualityTemplate = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `metricSystemPrompt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metricDescription`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | Description of what the metric should do.                              |
| `valueFieldName`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `explanationFieldName`                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Field name to look for in the chainpoll response, for the explanation. |
| `template`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metricFewShotExamples`                                                | [models.FewShotExample](../models/fewshotexample.md)[]                 | :heavy_minus_sign:                                                     | N/A                                                                    |
| `responseSchema`                                                       | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | Response schema for the output                                         |