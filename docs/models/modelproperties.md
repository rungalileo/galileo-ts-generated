# ModelProperties

## Example Usage

```typescript
import { ModelProperties } from "galileo-generated/models";

let value: ModelProperties = {
  alias: "<value>",
  name: "<value>",
  inputModalities: [
    "document",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `alias`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `inputModalities`                                        | [models.ContentModality](../models/contentmodality.md)[] | :heavy_check_mark:                                       | N/A                                                      |