# AnnotationQueueSettingsResponse

## Example Usage

```typescript
import { AnnotationQueueSettingsResponse } from "galileo-generated/models";

let value: AnnotationQueueSettingsResponse = {
  annotationQueueId: "<value>",
  settings: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `annotationQueueId`                                                                        | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `settings`                                                                                 | [models.AnnotationQueueSettings](../models/annotationqueuesettings.md)                     | :heavy_check_mark:                                                                         | What annotators see in the annotator view. Stored as JSON; defaults apply to missing keys. |