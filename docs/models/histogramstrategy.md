# HistogramStrategy

## Example Usage

```typescript
import { HistogramStrategy } from "galileo-generated/models";

let value: HistogramStrategy = "fixed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fixed" | "trimmed" | "quantile" | Unrecognized<string>
```