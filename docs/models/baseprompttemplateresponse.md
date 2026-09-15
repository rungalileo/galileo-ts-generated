# BasePromptTemplateResponse

Response from API to get a prompt template version.

## Example Usage

```typescript
import { BasePromptTemplateResponse } from "galileo-generated/models";

let value: BasePromptTemplateResponse = {
  id: "<value>",
  name: {
    value: "<value>",
    appendSuffixIfDuplicate: false,
  },
  template: "<value>",
  selectedVersion: {
    template: "<value>",
    version: 202495,
    settings: {},
    id: "<value>",
    modelChanged: true,
    settingsChanged: true,
    contentChanged: true,
    createdAt: new Date("2025-05-30T00:40:45.017Z"),
    updatedAt: new Date("2026-12-03T00:56:38.478Z"),
    createdByUser: {
      id: "<value>",
      email: "Garland.Barton@gmail.com",
    },
  },
  selectedVersionId: "<value>",
  allAvailableVersions: [
    218802,
    51139,
    406884,
  ],
  totalVersions: 233191,
  maxVersion: 648567,
  createdAt: new Date("2026-05-28T20:13:14.192Z"),
  updatedAt: new Date("2024-03-27T16:14:03.165Z"),
  createdByUser: {
    id: "<value>",
    email: "Garland.Barton@gmail.com",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *models.BasePromptTemplateResponseName*                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `template`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `selectedVersion`                                                                             | [models.BasePromptTemplateVersionResponse](../models/baseprompttemplateversionresponse.md)    | :heavy_check_mark:                                                                            | Base response from API for a prompt template version.                                         |
| `selectedVersionId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `allVersions`                                                                                 | [models.BasePromptTemplateVersionResponse](../models/baseprompttemplateversionresponse.md)[]  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `allAvailableVersions`                                                                        | *number*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalVersions`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `maxVersion`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |