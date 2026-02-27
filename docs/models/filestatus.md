# FileStatus

Processing status of the file.

## Example Usage

```typescript
import { FileStatus } from "galileo-generated/models";

let value: FileStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"complete" | "failed" | "pending" | "not_uploaded" | Unrecognized<string>
```