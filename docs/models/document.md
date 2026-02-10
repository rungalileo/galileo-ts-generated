# Document

## Example Usage

```typescript
import { Document } from "galileo-generated/models";

let value: Document = {
  content: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `metadata`                                | Record<string, *models.DocumentMetadata*> | :heavy_minus_sign:                        | N/A                                       |
| `content`                                 | *string*                                  | :heavy_check_mark:                        | Content of the document.                  |