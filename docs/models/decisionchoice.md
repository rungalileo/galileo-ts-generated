# DecisionChoice

One option of a choice question, with an optional description of when it applies.

Extra fields are forbidden, so a level, which has a ``level`` field, never validates as a choice.

## Example Usage

```typescript
import { DecisionChoice } from "galileo-generated/models";

let value: DecisionChoice = {
  label: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `label`            | *string*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |