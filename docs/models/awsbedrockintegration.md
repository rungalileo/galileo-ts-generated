# AwsBedrockIntegration

## Example Usage

```typescript
import { AwsBedrockIntegration } from "galileo-generated/models";

let value: AwsBedrockIntegration = {
  name: "aws_bedrock",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `credentialType`                                                             | [models.AwsCredentialType](../models/awscredentialtype.md)                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `region`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `inferenceProfiles`                                                          | Record<string, *string*>                                                     | :heavy_minus_sign:                                                           | Mapping from model name (Foundation model ID) to inference profile ARN or ID |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `name`                                                                       | *"aws_bedrock"*                                                              | :heavy_check_mark:                                                           | N/A                                                                          |
| `extra`                                                                      | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |