# ChoiceConstraints

## Example Usage

```typescript
import { ChoiceConstraints } from "galileo-generated/models";

let value: ChoiceConstraints = {
  annotationType: "choice",
  choices: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `annotationType`   | *"choice"*         | :heavy_check_mark: | N/A                |
| `choices`          | *string*[]         | :heavy_check_mark: | N/A                |
| `allowOther`       | *boolean*          | :heavy_minus_sign: | N/A                |