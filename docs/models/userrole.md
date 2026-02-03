# UserRole

## Example Usage

```typescript
import { UserRole } from "galileo-generated/models";

let value: UserRole = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"admin" | "manager" | "user" | "read_only" | Unrecognized<string>
```