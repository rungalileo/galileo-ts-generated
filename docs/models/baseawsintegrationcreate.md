# BaseAwsIntegrationCreate

## Example Usage

```typescript
import { BaseAwsIntegrationCreate } from "galileo-generated/models";

let value: BaseAwsIntegrationCreate = {
  token: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `multiModalConfig`                                                                       | [models.MultiModalModelIntegrationConfig](../models/multimodalmodelintegrationconfig.md) | :heavy_minus_sign:                                                                       | Configuration for multi-modal (file upload) capabilities.                                |
| `credentialType`                                                                         | [models.AwsCredentialType](../models/awscredentialtype.md)                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `region`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `inferenceProfiles`                                                                      | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | Mapping from model name (Foundation model ID) to inference profile ARN or ID             |
| `token`                                                                                  | Record<string, *string*>                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |