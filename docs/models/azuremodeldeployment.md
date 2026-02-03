# AzureModelDeployment

## Example Usage

```typescript
import { AzureModelDeployment } from "galileo-generated/models";

let value: AzureModelDeployment = {
  model: "Volt",
  id: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | The name of the model.    |
| `id`                      | *string*                  | :heavy_check_mark:        | The ID of the deployment. |