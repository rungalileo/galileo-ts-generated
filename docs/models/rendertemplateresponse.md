# RenderTemplateResponse

## Example Usage

```typescript
import { RenderTemplateResponse } from "galileo-generated/models";

let value: RenderTemplateResponse = {
  renderedTemplates: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `startingToken`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `paginated`                                                | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `nextStartingToken`                                        | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `renderedTemplates`                                        | [models.RenderedTemplate](../models/renderedtemplate.md)[] | :heavy_check_mark:                                         | N/A                                                        |