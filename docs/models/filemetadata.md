# FileMetadata

Enriched file metadata returned to UI/SDK.

Contains presigned URLs and properties for displaying multimodal
content in the Galileo console and SDKs.

## Example Usage

```typescript
import { FileMetadata } from "galileo-generated/models";

let value: FileMetadata = {
  fileId: "<value>",
  modality: "audio",
  source: "external_url",
  status: "pending",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `fileId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modality`                                                                                    | [models.ContentModality](../models/contentmodality.md)                                        | :heavy_check_mark:                                                                            | Classification of content modality                                                            |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | Presigned S3 URL or external URL                                                              |
| `urlExpiresAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiration time                                                                               |
| `sizeBytes`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filename`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [models.FileSource](../models/filesource.md)                                                  | :heavy_check_mark:                                                                            | Source of the file data.                                                                      |
| `status`                                                                                      | [models.FileStatus](../models/filestatus.md)                                                  | :heavy_check_mark:                                                                            | Processing status of the file.                                                                |