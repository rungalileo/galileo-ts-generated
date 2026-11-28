# DocumentOutput

## Example Usage

```typescript
import { DocumentOutput } from "galileo-generated/models";

let value: DocumentOutput = {
  content: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `content`                                       | *string*                                        | :heavy_check_mark:                              | Content of the document.                        |
| `metadata`                                      | Record<string, *models.DocumentOutputMetadata*> | :heavy_minus_sign:                              | N/A                                             |