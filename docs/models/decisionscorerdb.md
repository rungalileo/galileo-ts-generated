# DecisionScorerDB

A row of the decision_scorers table.

answer_options depends on the output type of the scorer:
- categorical: a list of labels (list[str]).
- discrete: a list of DecisionLevel.
- boolean_probability: None.

## Example Usage

```typescript
import { DecisionScorerDB } from "galileo-generated/models";

let value: DecisionScorerDB = {
  id: "<value>",
  organizationId: "<value>",
  question: "<value>",
  createdAt: new Date("2024-12-17T12:24:45.203Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `question`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `answerOptions`                                                                               | *models.DecisionScorerDBAnswerOptions*                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |