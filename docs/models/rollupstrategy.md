# RollUpStrategy

Strategies for rolling metrics up the Session/Trace/Span hierarchy.

## Example Usage

```typescript
import { RollUpStrategy } from "galileo-generated/models";

let value: RollUpStrategy = "avg";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"avg" | "sum" | "first" | "last" | "none" | Unrecognized<string>
```