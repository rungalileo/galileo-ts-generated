# AnnotationQueueSettings

What annotators see in the annotator view. Stored as JSON; defaults apply to missing keys.

## Example Usage

```typescript
import { AnnotationQueueSettings } from "galileo-generated/models";

let value: AnnotationQueueSettings = {};
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