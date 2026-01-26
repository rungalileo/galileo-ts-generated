# CreateGlobalPromptTemplateTemplatesPostRequest

## Example Usage

```typescript
import { CreateGlobalPromptTemplateTemplatesPostRequest } from "galileo-generated/models/operations";

let value: CreateGlobalPromptTemplateTemplatesPostRequest = {
  body: {
    template: [],
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `body`                                                                                                          | [models.CreatePromptTemplateWithVersionRequestBody](../../models/createprompttemplatewithversionrequestbody.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |