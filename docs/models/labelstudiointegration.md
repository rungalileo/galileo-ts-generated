# LabelStudioIntegration

The active labelstudio integration information.

## Example Usage

```typescript
import { LabelStudioIntegration } from "galileo-generated/models";

let value: LabelStudioIntegration = {
  name: "labelstudio",
  url: "https://gifted-colon.biz",
  isEnterprise: true,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_minus_sign:    | N/A                   |
| `name`                | *"labelstudio"*       | :heavy_check_mark:    | N/A                   |
| `extra`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `url`                 | *string*              | :heavy_check_mark:    | N/A                   |
| `isEnterprise`        | *boolean*             | :heavy_check_mark:    | N/A                   |