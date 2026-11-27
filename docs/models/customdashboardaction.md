# CustomDashboardAction

Per-dashboard actions reported on custom dashboard responses.

## Example Usage

```typescript
import { CustomDashboardAction } from "galileo-generated/models";

let value: CustomDashboardAction = "transfer";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"update" | "delete" | "transfer" | "share" | Unrecognized<string>
```