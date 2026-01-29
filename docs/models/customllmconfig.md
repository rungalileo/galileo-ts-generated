# CustomLLMConfig

Configuration for a custom LiteLLM handler class.

Allows users to specify a custom implementation of litellm.CustomLLM
that handles acompletion() calls with custom request/response transformation.

## Example Usage

```typescript
import { CustomLLMConfig } from "galileo-generated/models";

let value: CustomLLMConfig = {
  module: "<value>",
  className: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `module`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Fully qualified Python module path (e.g., 'mycompany.llm.handlers') |
| `className`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Class name within the module (must be a litellm.CustomLLM subclass) |
| `initKwargs`                                                        | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | Optional keyword arguments to pass to the CustomLLM constructor     |