# DatasetVersionDB

## Example Usage

```typescript
import { DatasetVersionDB } from "galileo-generated/models";

let value: DatasetVersionDB = {
  versionIndex: 613511,
  name: "<value>",
  createdAt: new Date("2025-08-02T13:19:33.347Z"),
  createdByUser: {
    id: "<value>",
    email: "Garland.Barton@gmail.com",
  },
  numRows: 43122,
  columnNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  rowsAdded: 958789,
  rowsRemoved: 343336,
  rowsEdited: 974846,
  columnsAdded: 822689,
  columnsRemoved: 919752,
  columnsRenamed: 540746,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `versionIndex`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numRows`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `columnNames`                                                                                 | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rowsAdded`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rowsRemoved`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rowsEdited`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `columnsAdded`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `columnsRemoved`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `columnsRenamed`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |