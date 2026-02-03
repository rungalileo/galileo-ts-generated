# RollUpStrategy

Strategies for rolling metrics up the Session/Trace/Span hierarchy.

## Example Usage

```typescript
import { RollUpStrategy } from "galileo-generated/models";

let value: RollUpStrategy = "avg";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"avg" | "sum" | "first" | "last" | "none" | Unrecognized<string>
```