# CreateOrUpdateIntegrationIntegrationsAzurePutSecurity

## Example Usage

```typescript
import { CreateOrUpdateIntegrationIntegrationsAzurePutSecurity } from "galileo-generated/models/operations";

let value: CreateOrUpdateIntegrationIntegrationsAzurePutSecurity = {
  httpBasic: {
    username: "",
    password: "",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `classicAPIKeyHeader`                                     | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `apiKeyHeader`                                            | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `oAuth2PasswordBearer`                                    | *models.OAuth2PasswordBearerInput*                        | :heavy_minus_sign:                                        | N/A                                                       |
| `httpBasic`                                               | [models.SchemeHTTPBasic](../../models/schemehttpbasic.md) | :heavy_minus_sign:                                        | N/A                                                       |