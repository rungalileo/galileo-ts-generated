# DataUnit

## Example Usage

```typescript
import { DataUnit } from "galileo-generated/models";

let value: DataUnit = "percentage";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"percentage" | "nano_seconds" | "milli_seconds" | "dollars" | "count_and_total" | Unrecognized<string>
```