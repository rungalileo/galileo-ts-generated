# WriterIntegration

## Example Usage

```typescript
import { WriterIntegration } from "galileo-generated/models";

let value: WriterIntegration = {
  organizationId: "<id>",
  provider: "writer",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `organizationId`      | *string*              | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_minus_sign:    | N/A                   |
| `name`                | *"writer"*            | :heavy_minus_sign:    | N/A                   |
| `provider`            | *"writer"*            | :heavy_check_mark:    | N/A                   |
| `extra`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |