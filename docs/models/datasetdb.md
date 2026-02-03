# DatasetDB

## Example Usage

```typescript
import { DatasetDB } from "galileo-generated/models";

let value: DatasetDB = {
  id: "<value>",
  name: "<value>",
  createdAt: new Date("2026-06-17T15:08:59.164Z"),
  updatedAt: new Date("2024-12-28T09:00:54.719Z"),
  projectCount: 660688,
  numRows: 807786,
  columnNames: [
    "<value 1>",
    "<value 2>",
  ],
  createdByUser: {
    id: "<value>",
    email: "Jeanie.Bradtke34@yahoo.com",
  },
  currentVersionIndex: 15912,
  draft: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numRows`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `columnNames`                                                                                 | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentVersionIndex`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `draft`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |