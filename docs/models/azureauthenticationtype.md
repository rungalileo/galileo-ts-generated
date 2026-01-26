# AzureAuthenticationType

## Example Usage

```typescript
import { AzureAuthenticationType } from "galileo-generated/models";

let value: AzureAuthenticationType = "custom_oauth2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"api_key" | "client_secret" | "username_password" | "custom_oauth2" | Unrecognized<string>
```