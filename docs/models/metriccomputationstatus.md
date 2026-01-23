# MetricComputationStatus

## Example Usage

```typescript
import { MetricComputationStatus } from "galileo-generated/models";

let value: MetricComputationStatus = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"success" | "timeout" | "failed" | "error" | Unrecognized<string>
```