# CustomIntegrationCreate

## Example Usage

```typescript
import { CustomIntegrationCreate } from "galileo-generated/models";

let value: CustomIntegrationCreate = {
  models: [],
  endpoint: "<value>",
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
| `token`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |