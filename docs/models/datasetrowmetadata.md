# DatasetRowMetadata

## Example Usage

```typescript
import { DatasetRowMetadata } from "galileo-generated/models";

let value: DatasetRowMetadata = {
  createdInVersion: 543766,
  createdAt: new Date("2026-12-23T00:34:14.922Z"),
  createdByUser: {
    id: "<value>",
    email: "Garland.Barton@gmail.com",
  },
  updatedInVersion: 99007,
  updatedAt: new Date("2025-02-22T05:25:47.165Z"),
  updatedByUser: {
    id: "<value>",
    email: "Lenore.Fritsch16@gmail.com",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdInVersion`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedInVersion`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |