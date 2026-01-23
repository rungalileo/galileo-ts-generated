# RenderTemplateRenderTemplatePostRequest

## Example Usage

```typescript
import { RenderTemplateRenderTemplatePostRequest } from "galileo-generated/models/operations";

let value: RenderTemplateRenderTemplatePostRequest = {
  body: {
    template: "<value>",
    data: {
      datasetId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `startingToken`                                                       | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `body`                                                                | [models.RenderTemplateRequest](../../models/rendertemplaterequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |