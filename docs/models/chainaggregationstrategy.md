# ChainAggregationStrategy

## Example Usage

```typescript
import { ChainAggregationStrategy } from "galileo-generated/models";

let value: ChainAggregationStrategy = "sum";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sum" | "average" | "first" | "last" | Unrecognized<string>
```