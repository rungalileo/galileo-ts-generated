# CreateAnnotationQueueRequest

## Example Usage

```typescript
import { CreateAnnotationQueueRequest } from "galileo-generated/models";

let value: CreateAnnotationQueueRequest = {
  name: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | [models.Name](../models/name.md)                                     | :heavy_check_mark:                                                   | Global name class for handling unique naming across the application. |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `annotatorEmails`                                                    | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `copyTemplatesFromQueueId`                                           | *string*                                                             | :heavy_minus_sign:                                                   | Optional ID of an existing annotation queue to copy templates from   |