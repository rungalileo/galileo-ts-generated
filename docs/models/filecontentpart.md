# FileContentPart

Reference to a file associated with this message.

The file_id can be resolved via the ``files`` dict returned on
trace/span detail responses, which contains metadata such as
modality, MIME type, and a presigned download URL.

## Example Usage

```typescript
import { FileContentPart } from "galileo-generated/models";

let value: FileContentPart = {
  type: "file",
  fileId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"file"*           | :heavy_check_mark: | N/A                |
| `fileId`           | *string*           | :heavy_check_mark: | N/A                |