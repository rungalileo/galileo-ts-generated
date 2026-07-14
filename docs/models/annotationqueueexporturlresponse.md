# AnnotationQueueExportUrlResponse

Response for an annotation queue export written to object storage.

## Example Usage

```typescript
import { AnnotationQueueExportUrlResponse } from "galileo-generated/models";

let value: AnnotationQueueExportUrlResponse = {
  url: "https://secondary-bowling.net/",
  urlExpiresAt: new Date("2025-12-16T10:25:20.237Z"),
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