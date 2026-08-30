# CreateQueueTemplateRequest

Request to create templates in an annotation queue.

Supports two scenarios:
1. Create a single template (template field)
2. Copy all templates from a source queue (copy_from_queue_id field)

## Example Usage

```typescript
import { CreateQueueTemplateRequest } from "galileo-generated/models";

let value: CreateQueueTemplateRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `template`                                                                        | [models.AnnotationTemplateCreate](../models/annotationtemplatecreate.md)          | :heavy_minus_sign:                                                                | Template to create. Required if copy_from_queue_id is not provided.               |
| `copyFromQueueId`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | Source queue ID to copy all templates from. Required if template is not provided. |