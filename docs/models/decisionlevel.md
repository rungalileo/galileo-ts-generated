# DecisionLevel

One level of a score question. A question's levels run 0, 1, 2 and so on, with no gaps.

## Example Usage

```typescript
import { DecisionLevel } from "galileo-generated/models";

let value: DecisionLevel = {
  level: 601065,
  label: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `level`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *string*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |