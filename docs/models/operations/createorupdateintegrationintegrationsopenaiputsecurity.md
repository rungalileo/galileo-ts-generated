# CreateOrUpdateIntegrationIntegrationsOpenaiPutSecurity

## Example Usage

```typescript
import { CreateOrUpdateIntegrationIntegrationsOpenaiPutSecurity } from "galileo-generated/models/operations";

let value: CreateOrUpdateIntegrationIntegrationsOpenaiPutSecurity = {
  httpBasic: {
    username: "",
    password: "",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `apiKeyHeader`                                            | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `oAuth2PasswordBearer`                                    | *models.OAuth2PasswordBearerInput*                        | :heavy_minus_sign:                                        | N/A                                                       |
| `httpBasic`                                               | [models.SchemeHTTPBasic](../../models/schemehttpbasic.md) | :heavy_minus_sign:                                        | N/A                                                       |