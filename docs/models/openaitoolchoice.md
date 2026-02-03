# OpenAIToolChoice

## Example Usage

```typescript
import { OpenAIToolChoice } from "galileo-generated/models";

let value: OpenAIToolChoice = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `function`                                           | [models.OpenAIFunction](../models/openaifunction.md) | :heavy_check_mark:                                   | N/A                                                  |