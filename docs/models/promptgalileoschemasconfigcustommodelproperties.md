# PromptgalileoSchemasConfigCustomModelProperties

Properties for a model in a custom integration.

Attributes:
    name: The model name used when calling the API.
    alias: The display name/alias for the model in the UI.
          Defaults to ``name`` when not provided.

## Example Usage

```typescript
import { PromptgalileoSchemasConfigCustomModelProperties } from "galileo-generated/models";

let value: PromptgalileoSchemasConfigCustomModelProperties = {
  name: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | The model name used when calling the API.               |
| `alias`                                                 | *string*                                                | :heavy_minus_sign:                                      | The display name/alias for the model. Defaults to name. |