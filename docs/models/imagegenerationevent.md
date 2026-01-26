# ImageGenerationEvent

An image generation event from the model.

## Example Usage

```typescript
import { ImageGenerationEvent } from "galileo-generated/models";

let value: ImageGenerationEvent = {
  type: "image_generation",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"image_generation"*                             | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | Unique identifier for the event                  |
| `status`                                         | [models.EventStatus](../models/eventstatus.md)   | :heavy_minus_sign:                               | Status of the event                              |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | Provider-specific metadata and additional fields |
| `errorMessage`                                   | *string*                                         | :heavy_minus_sign:                               | Error message if the event failed                |
| `prompt`                                         | *string*                                         | :heavy_minus_sign:                               | The prompt used for image generation             |
| `images`                                         | Record<string, *any*>[]                          | :heavy_minus_sign:                               | Generated images with URLs or base64 data        |
| `model`                                          | *string*                                         | :heavy_minus_sign:                               | Image generation model used                      |