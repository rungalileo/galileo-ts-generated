# CustomAuthenticationType

Authentication types for custom integrations.

Values:
- none: No authentication required
- oauth2: OAuth2 token-based authentication
- api_key: API key header-based authentication

## Example Usage

```typescript
import { CustomAuthenticationType } from "galileo-generated/models";

let value: CustomAuthenticationType = "api_key";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"api_key" | "none" | "oauth2" | Unrecognized<string>
```