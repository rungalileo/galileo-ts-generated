# ExecutionStatus

Status of the execution.

## Example Usage

```typescript
import { ExecutionStatus } from "galileo-generated/models";

let value: ExecutionStatus = "skipped";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"triggered" | "failed" | "error" | "timeout" | "paused" | "not_triggered" | "skipped" | Unrecognized<string>
```