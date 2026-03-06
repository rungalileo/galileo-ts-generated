# AuthMethod

## Example Usage

```typescript
import { AuthMethod } from "galileo-generated/models";

let value: AuthMethod = "azure-ad";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"email" | "google" | "github" | "okta" | "azure-ad" | "custom" | "saml" | Unrecognized<string>
```