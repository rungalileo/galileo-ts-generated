# BasePromptTemplateVersion

## Example Usage

```typescript
import { BasePromptTemplateVersion } from "galileo-generated/models";

let value: BasePromptTemplateVersion = {
  template: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `template`                                                 | *models.BasePromptTemplateVersionTemplate*                 | :heavy_check_mark:                                         | N/A                                                        |
| `raw`                                                      | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `version`                                                  | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `settings`                                                 | [models.PromptRunSettings](../models/promptrunsettings.md) | :heavy_minus_sign:                                         | Prompt run settings.                                       |
| `outputType`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |