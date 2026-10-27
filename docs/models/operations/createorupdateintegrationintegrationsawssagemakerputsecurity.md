# CreateOrUpdateIntegrationIntegrationsAwsSagemakerPutSecurity

## Example Usage

```typescript
import { CreateOrUpdateIntegrationIntegrationsAwsSagemakerPutSecurity } from "galileo-generated/models/operations";

let value: CreateOrUpdateIntegrationIntegrationsAwsSagemakerPutSecurity = {
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
| `classicAPIKeyHeader`                                     | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `oAuth2PasswordBearer`                                    | *models.OAuth2PasswordBearerInput*                        | :heavy_minus_sign:                                        | N/A                                                       |
| `httpBasic`                                               | [models.SchemeHTTPBasic](../../models/schemehttpbasic.md) | :heavy_minus_sign:                                        | N/A                                                       |