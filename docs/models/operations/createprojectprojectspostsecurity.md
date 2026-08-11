# CreateProjectProjectsPostSecurity

## Example Usage

```typescript
import { CreateProjectProjectsPostSecurity } from "galileo-generated/models/operations";

let value: CreateProjectProjectsPostSecurity = {
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