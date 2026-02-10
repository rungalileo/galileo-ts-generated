# VegasGatewayIntegrationCreate

## Example Usage

```typescript
import { VegasGatewayIntegrationCreate } from "galileo-generated/models";

let value: VegasGatewayIntegrationCreate = {
  endpoint: "https://serene-hunt.info",
  useCase: "<value>",
  token: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `multiModalConfig`                                                                       | [models.MultiModalModelIntegrationConfig](../models/multimodalmodelintegrationconfig.md) | :heavy_minus_sign:                                                                       | Configuration for multi-modal (file upload) capabilities.                                |
| `endpoint`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `useCase`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `token`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |