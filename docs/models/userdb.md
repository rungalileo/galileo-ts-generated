# UserDB

## Example Usage

```typescript
import { UserDB } from "galileo-generated/models";

let value: UserDB = {
  id: "<value>",
  email: "Oswaldo92@hotmail.com",
  organizationId: "<value>",
  organizationName: "<value>",
  createdAt: new Date("2025-02-28T18:16:42.372Z"),
  updatedAt: new Date("2024-10-17T20:23:19.679Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `authMethod`                                                                                  | [models.AuthMethod](../models/authmethod.md)                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [models.UserRole](../models/userrole.md)                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `emailIsVerified`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationName`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |