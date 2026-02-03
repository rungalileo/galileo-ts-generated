# UserAction

## Example Usage

```typescript
import { UserAction } from "galileo-generated/models";

let value: UserAction = "delete";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"update" | "delete" | "read_api_keys" | Unrecognized<string>
```