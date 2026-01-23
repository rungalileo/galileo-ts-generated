# Permission

## Example Usage

```typescript
import { Permission } from "galileo-generated/models";

let value: Permission = {
  action: "delete",
  allowed: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `action`                  | *models.PermissionAction* | :heavy_check_mark:        | N/A                       |
| `allowed`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `message`                 | *string*                  | :heavy_minus_sign:        | N/A                       |