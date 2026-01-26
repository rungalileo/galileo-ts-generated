# BulkDeletePromptTemplatesResponse

Response from bulk deletion operation.

## Example Usage

```typescript
import { BulkDeletePromptTemplatesResponse } from "galileo-generated/models";

let value: BulkDeletePromptTemplatesResponse = {
  deletedCount: 765213,
  message: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `deletedCount`                                                                                             | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `failedDeletions`                                                                                          | [models.ApiSchemasContentPromptBulkDeleteFailure](../models/apischemascontentpromptbulkdeletefailure.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |