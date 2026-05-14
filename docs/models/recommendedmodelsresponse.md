# RecommendedModelsResponse

## Example Usage

```typescript
import { RecommendedModelsResponse } from "galileo-generated/models";

let value: RecommendedModelsResponse = {
  supported: {
    "key": {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
      ],
    },
    "key1": {
      "key": [
        "<value 1>",
      ],
    },
    "key2": {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key1": [],
      "key2": [
        "<value 1>",
      ],
    },
  },
  available: {
    "key": {
      "key": [
        "<value 1>",
        "<value 2>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
      ],
      "key2": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    "key1": {
      "key": [
        "<value 1>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key2": [],
    },
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `supported`                                | Record<string, Record<string, *string*[]>> | :heavy_check_mark:                         | N/A                                        |
| `available`                                | Record<string, Record<string, *string*[]>> | :heavy_check_mark:                         | N/A                                        |