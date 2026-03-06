# GeneratedScorerResponse

## Example Usage

```typescript
import { GeneratedScorerResponse } from "galileo-generated/models";

let value: GeneratedScorerResponse = {
  id: "<value>",
  name: "<value>",
  chainPollTemplate: {
    template: "<value>",
  },
  createdBy: "<value>",
  createdAt: new Date("2025-11-02T13:00:24.026Z"),
  updatedAt: new Date("2025-04-07T21:04:02.068Z"),
  scoreableNodeTypes: [
    "chat",
  ],
  scorerConfiguration: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `instructions`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `chainPollTemplate`                                                                                   | [models.ChainPollTemplate](../models/chainpolltemplate.md)                                            | :heavy_check_mark:                                                                                    | Template for a chainpoll metric prompt,<br/>containing all the info necessary to send a chainpoll prompt. |
| `userPrompt`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `createdBy`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `scoreableNodeTypes`                                                                                  | [models.NodeType](../models/nodetype.md)[]                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `scorerConfiguration`                                                                                 | [models.GeneratedScorerConfiguration](../models/generatedscorerconfiguration.md)                      | :heavy_check_mark:                                                                                    | N/A                                                                                                   |