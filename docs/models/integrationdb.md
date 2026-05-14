# IntegrationDB

## Example Usage

```typescript
import { IntegrationDB } from "galileo-generated/models";

let value: IntegrationDB = {
  id: "<value>",
  name: "<value>",
  provider: "custom",
  createdAt: new Date("2026-09-15T14:28:18.727Z"),
  updatedAt: new Date("2026-07-26T08:14:44.703Z"),
  createdBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | [models.IntegrationProvider](../models/integrationprovider.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isSelected`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isDisabled`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |