# NumericRollUpMethod

Roll up methods for aggregating numeric metrics up the session/trace/span hierarchy.

## Example Usage

```typescript
import { NumericRollUpMethod } from "galileo-generated/models";

let value: NumericRollUpMethod = "sum";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"average" | "sum" | "max" | "min" | Unrecognized<string>
```