# CreateDecisionScorerVersionScorersScorerIdVersionDecisionPostRequest

## Example Usage

```typescript
import { CreateDecisionScorerVersionScorersScorerIdVersionDecisionPostRequest } from "galileo-generated/models/operations";

let value:
  CreateDecisionScorerVersionScorersScorerIdVersionDecisionPostRequest = {
    scorerId: "<value>",
    body: {
      modelName: "<value>",
      question: "<value>",
    },
  };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `scorerId`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.CreateDecisionScorerVersionRequest](../../models/createdecisionscorerversionrequest.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |