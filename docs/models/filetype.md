# FileType

## Example Usage

```typescript
import { FileType } from "galileo-generated/models";

let value: FileType = "zip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "json" | "parquet" | "arrow" | "zip" | Unrecognized<string>
```