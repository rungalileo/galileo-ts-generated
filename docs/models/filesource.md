# FileSource

Source of the file data.

## Example Usage

```typescript
import { FileSource } from "galileo-generated/models";

let value: FileSource = "external_url";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"direct_upload" | "external_files_api" | "external_url" | "assembled_stream" | Unrecognized<string>
```