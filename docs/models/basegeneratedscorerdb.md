# BaseGeneratedScorerDB

## Example Usage

```typescript
import { BaseGeneratedScorerDB } from "galileo-generated/models";

let value: BaseGeneratedScorerDB = {
  id: "<value>",
  name: "<value>",
  chainPollTemplate: {
    template: "<value>",
  },
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