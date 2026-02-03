# EventStatus

Common status values for events.

## Example Usage

```typescript
import { EventStatus } from "galileo-generated/models";

let value: EventStatus = "cancelled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"in_progress" | "completed" | "failed" | "cancelled" | "incomplete" | Unrecognized<string>
```