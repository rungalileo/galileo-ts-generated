# NumericRollUpMethod

Roll up methods for aggregating numeric metrics up the session/trace/span hierarchy.

## Example Usage

```typescript
import { NumericRollUpMethod } from "galileo-generated/models";

let value: NumericRollUpMethod = "sum";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"average" | "sum" | "max" | "min" | Unrecognized<string>
```