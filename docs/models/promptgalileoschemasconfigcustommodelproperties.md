# PromptgalileoSchemasConfigCustomModelProperties

Properties for a model in a custom integration.

Attributes:
    name: The model name used when calling the API.
    alias: The display name/alias for the model in the UI.
          Defaults to ``name`` when not provided.
    based_on: Alias of a built-in model whose parameter map should be used.
              Mutually exclusive with ``supported_parameters``.
    supported_parameters: Explicit list of parameter names this model supports.
                          Mutually exclusive with ``based_on``.

## Example Usage

```typescript
import { PromptgalileoSchemasConfigCustomModelProperties } from "galileo-generated/models";

let value: PromptgalileoSchemasConfigCustomModelProperties = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                   | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The model name used when calling the API.                                                                                                                                                |
| `alias`                                                                                                                                                                                  | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | The display name/alias for the model. Defaults to name.                                                                                                                                  |
| `basedOn`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | Alias of a built-in model whose parameter map should be used. For example, 'gpt-5.4'. Mutually exclusive with supported_parameters.                                                      |
| `supportedParameters`                                                                                                                                                                    | *string*[]                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                       | Explicit list of parameter names this model supports (e.g., ['max_tokens', 'temperature', 'verbosity']). Each name must be a valid RunParamsMap field. Mutually exclusive with based_on. |