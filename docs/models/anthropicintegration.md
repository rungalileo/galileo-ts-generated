# AnthropicIntegration

## Example Usage

```typescript
import { AnthropicIntegration } from "galileo-generated/models";

let value: AnthropicIntegration = {
  name: "anthropic",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `authenticationType`                                                           | [models.AnthropicAuthenticationType](../models/anthropicauthenticationtype.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Custom base URL for the Anthropic API. Required if `proxy` is True.            |
| `authenticationScope`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `oauth2TokenUrl`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | OAuth2 token URL for custom OAuth2 authentication                              |
| `customHeaderMapping`                                                          | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | Custom header mapping from internal fields to be included in the LLM request.  |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `name`                                                                         | *"anthropic"*                                                                  | :heavy_check_mark:                                                             | N/A                                                                            |
| `extra`                                                                        | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |