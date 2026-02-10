# ColumnCategory

## Example Usage

```typescript
import { ColumnCategory } from "galileo-generated/models";

let value: ColumnCategory = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "metric" | "user_metadata" | "metric_status" | "dataset_metadata" | "dataset" | "feedback" | "tags" | Unrecognized<string>
```