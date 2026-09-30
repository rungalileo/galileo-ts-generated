# AnnotationQueueResponse

## Example Usage

```typescript
import { AnnotationQueueResponse } from "galileo-generated/models";

let value: AnnotationQueueResponse = {
  id: "<value>",
  name: "<value>",
  description: "well-groomed painfully than quash gadzooks",
  createdAt: new Date("2025-04-05T06:55:09.569Z"),
  updatedAt: new Date("2024-01-21T16:51:17.896Z"),
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
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numLogRecords`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numAnnotators`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numUsers`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numTemplates`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numLogsAnnotated`                                                                            | Record<string, *number*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `progress`                                                                                    | Record<string, *number*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `overallProgress`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `templates`                                                                                   | [models.AnnotationTemplateDB](../models/annotationtemplatedb.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |