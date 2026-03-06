# EventStatus

Common status values for events.

## Example Usage

```typescript
import { EventStatus } from "galileo-generated/models";

let value: EventStatus = "cancelled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"in_progress" | "completed" | "failed" | "cancelled" | "incomplete" | Unrecognized<string>
```