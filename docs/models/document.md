# Document

## Example Usage

```typescript
import { Document } from "galileo-generated/models";

let value: Document = {
  pageContent: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `pageContent`                             | *string*                                  | :heavy_check_mark:                        | Content of the document.                  |
| `metadata`                                | Record<string, *models.DocumentMetadata*> | :heavy_minus_sign:                        | N/A                                       |