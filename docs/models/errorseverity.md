# ErrorSeverity

Error severity levels for catalog entries.

## Example Usage

```typescript
import { ErrorSeverity } from "galileo-generated/models";

let value: ErrorSeverity = "critical";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"low" | "medium" | "high" | "critical" | Unrecognized<string>
```