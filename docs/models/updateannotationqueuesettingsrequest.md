# UpdateAnnotationQueueSettingsRequest

PUT body. Rejects unknown keys; the base model must not, since it also validates stored JSON on GET.

## Example Usage

```typescript
import { UpdateAnnotationQueueSettingsRequest } from "galileo-generated/models";

let value: UpdateAnnotationQueueSettingsRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `showFullSession`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `showConversationHistory`                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `showSpanTypes`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `spanTypes`                                                          | [models.AnnotatorViewSpanType](../models/annotatorviewspantype.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `showParameters`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `showSpanMetadata`                                                   | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `showEvaluators`                                                     | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |