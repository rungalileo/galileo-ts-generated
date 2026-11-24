# DocumentInput

## Example Usage

```typescript
import { DocumentInput } from "galileo-generated/models";

let value: DocumentInput = {
  pageContent: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `pageContent`                                  | *string*                                       | :heavy_check_mark:                             | Content of the document.                       |
| `metadata`                                     | Record<string, *models.DocumentInputMetadata*> | :heavy_minus_sign:                             | N/A                                            |