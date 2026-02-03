# PriorityCategory

## Example Usage

```typescript
import { PriorityCategory } from "galileo-generated/models";

let value: PriorityCategory = "warning";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warning" | "info" | Unrecognized<string>
```