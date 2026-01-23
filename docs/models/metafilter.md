# MetaFilter

A class for filtering arbitrary metadata columns.

## Example Usage

```typescript
import { MetaFilter } from "galileo-generated/models";

let value: MetaFilter = {
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `greaterThan`      | *number*           | :heavy_minus_sign: | N/A                |
| `lessThan`         | *number*           | :heavy_minus_sign: | N/A                |
| `isin`             | *models.Isin*[]    | :heavy_minus_sign: | N/A                |
| `isEqual`          | *models.IsEqual*   | :heavy_minus_sign: | N/A                |