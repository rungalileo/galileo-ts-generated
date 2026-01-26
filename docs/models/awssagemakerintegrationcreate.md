# AwsSageMakerIntegrationCreate

## Example Usage

```typescript
import { AwsSageMakerIntegrationCreate } from "galileo-generated/models";

let value: AwsSageMakerIntegrationCreate = {
  token: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `models`                                                                     | [models.Model](../models/model.md)[]                                         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `credentialType`                                                             | [models.AwsCredentialType](../models/awscredentialtype.md)                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `region`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `inferenceProfiles`                                                          | Record<string, *string*>                                                     | :heavy_minus_sign:                                                           | Mapping from model name (Foundation model ID) to inference profile ARN or ID |
| `token`                                                                      | Record<string, *string*>                                                     | :heavy_check_mark:                                                           | N/A                                                                          |