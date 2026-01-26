# ApiSchemasMetricRollUpNumericRollUpMethod

Roll up methods for aggregating numeric metrics up the session/trace/span hierarchy.

## Example Usage

```typescript
import { ApiSchemasMetricRollUpNumericRollUpMethod } from "galileo-generated/models";

let value: ApiSchemasMetricRollUpNumericRollUpMethod = "average";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"average" | "sum" | "max" | "min" | Unrecognized<string>
```