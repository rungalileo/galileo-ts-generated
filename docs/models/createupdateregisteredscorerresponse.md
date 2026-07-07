# CreateUpdateRegisteredScorerResponse

## Example Usage

```typescript
import { CreateUpdateRegisteredScorerResponse } from "galileo-generated/models";

let value: CreateUpdateRegisteredScorerResponse = {
  id: "<value>",
  name: "<value>",
  scoreType: "<value>",
  createdAt: new Date("2026-10-13T00:22:46.607Z"),
  updatedAt: new Date("2024-12-22T06:08:26.614Z"),
  createdBy: "<value>",
  dataType: "user_id",
  scoreableNodeTypes: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scoreType`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dataType`                                                                                    | [models.DataTypeOptions](../models/datatypeoptions.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scoreableNodeTypes`                                                                          | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |