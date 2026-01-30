# TaskResultStatus

## Example Usage

```typescript
import { TaskResultStatus } from "galileo-generated/models";

let value: TaskResultStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "started" | "completed" | "failed" | Unrecognized<string>
```