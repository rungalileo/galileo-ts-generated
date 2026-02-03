# AuthMethod

## Example Usage

```typescript
import { AuthMethod } from "galileo-generated/models";

let value: AuthMethod = "okta";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"email" | "google" | "github" | "okta" | "azure-ad" | "custom" | Unrecognized<string>
```