# ActionResult

## Example Usage

```typescript
import { ActionResult } from "galileo-generated/models";

let value: ActionResult = {
  type: "PASSTHROUGH",
  value: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `type`                                       | [models.ActionType](../models/actiontype.md) | :heavy_check_mark:                           | N/A                                          |
| `value`                                      | *string*                                     | :heavy_check_mark:                           | Value of the action that was taken.          |