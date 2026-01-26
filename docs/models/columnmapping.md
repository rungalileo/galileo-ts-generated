# ColumnMapping

## Example Usage

```typescript
import { ColumnMapping } from "galileo-generated/models";

let value: ColumnMapping = {
  input: [],
  output: {
    columns: [],
    flatten: false,
  },
  metadata: {
    columns: [],
    flatten: false,
  },
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `input`                        | *models.ColumnMappingInput*    | :heavy_check_mark:             | N/A                            |
| `output`                       | *models.ColumnMappingOutput*   | :heavy_check_mark:             | N/A                            |
| `metadata`                     | *models.ColumnMappingMetadata* | :heavy_check_mark:             | N/A                            |