# CreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPostRequest

## Example Usage

```typescript
import {
  CreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPostRequest,
} from "galileo-generated/models/operations";

let value:
  CreatePromptTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsPostRequest =
    {
      projectId: "<value>",
      templateId: "<value>",
      body: {
        template: "<value>",
      },
    };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `templateId`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `body`                                                                        | [models.BasePromptTemplateVersion](../../models/baseprompttemplateversion.md) | :heavy_check_mark:                                                            | N/A                                                                           |