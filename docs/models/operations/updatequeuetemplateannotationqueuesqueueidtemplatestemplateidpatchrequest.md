# UpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatchRequest

## Example Usage

```typescript
import { UpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatchRequest = {
    templateId: "<value>",
    queueId: "<value>",
    body: {
      name: "<value>",
      criteria: "<value>",
    },
  };
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `templateId`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `queueId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `body`                                                                      | [models.AnnotationTemplateUpdate](../../models/annotationtemplateupdate.md) | :heavy_check_mark:                                                          | N/A                                                                         |