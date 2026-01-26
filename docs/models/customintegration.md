# CustomIntegration

## Example Usage

```typescript
import { CustomIntegration } from "galileo-generated/models";

let value: CustomIntegration = {
  models: [
    "<value 1>",
  ],
  endpoint: "<value>",
  name: "custom",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authenticationType`                                                                          | [models.CustomAuthenticationType](../models/customauthenticationtype.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `models`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of model names for the custom integration                                                |
| `defaultModel`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Default model to use. If not provided, defaults to the first model in the models list.        |
| `endpoint`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Endpoint URL for the custom integration.                                                      |
| `authenticationScope`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional scope for OAuth2 authentication.                                                     |
| `oauth2TokenUrl`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | OAuth2 token URL for custom OAuth2 authentication. If not provided, defaults to the endpoint. |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *"custom"*                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extra`                                                                                       | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |