# SavedEvaluatorReference

A saved Evaluator and the optional exact version selected by its caller.

## Example Usage

```typescript
import { SavedEvaluatorReference } from "galileo-generated/models";

let value: SavedEvaluatorReference = {
  scorerId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `scorerId`         | *string*           | :heavy_check_mark: | N/A                |
| `scorerVersionId`  | *string*           | :heavy_minus_sign: | N/A                |