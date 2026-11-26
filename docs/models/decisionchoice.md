# DecisionChoice

Extra fields are forbidden so a score level never validates as a choice.

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