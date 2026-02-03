# DatasetAction

## Example Usage

```typescript
import { DatasetAction } from "galileo-generated/models";

let value: DatasetAction = "rename";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"update" | "delete" | "share" | "export" | "rename" | Unrecognized<string>
```