# ExportPresignedUrlResponse

Response for an export written to object storage.

## Example Usage

```typescript
import { ExportPresignedUrlResponse } from "galileo-generated/models";

let value: ExportPresignedUrlResponse = {
  url: "https://confused-arcade.org",
  urlExpiresAt: new Date("2026-11-12T21:09:04.985Z"),
  fileName: "example.file",
  contentType: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `urlExpiresAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |