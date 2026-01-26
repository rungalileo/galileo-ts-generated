# LassoSelection

Representation of a lasso selection (used by embeddings)

x and y correspond to the cursor movement while tracing the lasso. This is natively provided by plotly when creating
a lasso selection, for example

## Example Usage

```typescript
import { LassoSelection } from "galileo-generated/models";

let value: LassoSelection = {
  x: [
    805.76,
  ],
  y: [
    1717.7,
    904.87,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `x`                | *number*[]         | :heavy_check_mark: | N/A                |
| `y`                | *number*[]         | :heavy_check_mark: | N/A                |