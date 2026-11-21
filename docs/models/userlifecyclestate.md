# UserLifecycleState

Retention state, separate from invitation, verification, and sign-in status.

Active identities are neither deactivated nor removed. Deactivated identities retain
their profile with access revoked. Removed identities have an anonymized live profile.

## Example Usage

```typescript
import { UserLifecycleState } from "galileo-generated/models";

let value: UserLifecycleState = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "deactivated" | "removed" | Unrecognized<string>
```