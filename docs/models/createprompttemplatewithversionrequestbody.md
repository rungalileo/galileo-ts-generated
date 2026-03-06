# CreatePromptTemplateWithVersionRequestBody

Body to create a new prompt template with version.

This is only used for parsing the body from the request.

## Example Usage

```typescript
import { CreatePromptTemplateWithVersionRequestBody } from "galileo-generated/models";

let value: CreatePromptTemplateWithVersionRequestBody = {
  template: [
    {
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
      role: "function",
    },
  ],
  name: {
    value: "<value>",
    appendSuffixIfDuplicate: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `template`                                                  | *models.CreatePromptTemplateWithVersionRequestBodyTemplate* | :heavy_check_mark:                                          | N/A                                                         |
| `raw`                                                       | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |
| `version`                                                   | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `settings`                                                  | [models.PromptRunSettings](../models/promptrunsettings.md)  | :heavy_minus_sign:                                          | Prompt run settings.                                        |
| `outputType`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `name`                                                      | *models.CreatePromptTemplateWithVersionRequestBodyName*     | :heavy_check_mark:                                          | N/A                                                         |
| `hidden`                                                    | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |