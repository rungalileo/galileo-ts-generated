# CustomLLMConfig

Configuration for a custom LiteLLM handler class.

Allows users to specify a custom implementation of litellm.CustomLLM
that handles acompletion() calls with custom request/response transformation.

## Example Usage

```typescript
import { CustomLLMConfig } from "galileo-generated/models";

let value: CustomLLMConfig = {
  fileName: "example.file",
  className: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `fileName`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Python file name containing the CustomLLM class (e.g., 'my_handler.py') |
| `className`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Class name within the module (must be a litellm.CustomLLM subclass)     |
| `initKwargs`                                                            | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Optional keyword arguments to pass to the CustomLLM constructor         |