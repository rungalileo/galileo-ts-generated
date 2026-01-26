# ExecutionStatus

Status of the execution.

## Example Usage

```typescript
import { ExecutionStatus } from "galileo-generated/models";

let value: ExecutionStatus = "skipped";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"triggered" | "failed" | "error" | "timeout" | "paused" | "not_triggered" | "skipped" | Unrecognized<string>
```