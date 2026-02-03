# AwsSageMakerIntegration

## Example Usage

```typescript
import { AwsSageMakerIntegration } from "galileo-generated/models";

let value: AwsSageMakerIntegration = {
  name: "aws_sagemaker",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `credentialType`                                           | [models.AwsCredentialType](../models/awscredentialtype.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `region`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `models`                                                   | [models.Model](../models/model.md)[]                       | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `name`                                                     | *"aws_sagemaker"*                                          | :heavy_check_mark:                                         | N/A                                                        |
| `extra`                                                    | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |