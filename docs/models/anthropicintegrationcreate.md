# AnthropicIntegrationCreate

## Example Usage

```typescript
import { AnthropicIntegrationCreate } from "galileo-generated/models";

let value: AnthropicIntegrationCreate = {
  token: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `multiModalConfig`                                                                       | [models.MultiModalModelIntegrationConfig](../models/multimodalmodelintegrationconfig.md) | :heavy_minus_sign:                                                                       | Configuration for multi-modal (file upload) capabilities.                                |
| `authenticationType`                                                                     | [models.AnthropicAuthenticationType](../models/anthropicauthenticationtype.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `endpoint`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Custom base URL for the Anthropic API. Required if `proxy` is True.                      |
| `authenticationScope`                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oauth2TokenUrl`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | OAuth2 token URL for custom OAuth2 authentication                                        |
| `customHeaderMapping`                                                                    | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | Custom header mapping from internal fields to be included in the LLM request.            |
| `token`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |