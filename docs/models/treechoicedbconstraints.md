# TreeChoiceDBConstraints

## Example Usage

```typescript
import { TreeChoiceDBConstraints } from "galileo-generated/models";

let value: TreeChoiceDBConstraints = {
  annotationType: "tree_choice",
  choicesTree: [
    {
      label: "<value>",
      id: "<id>",
    },
  ],
  choicesTreeYaml: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `annotationType`                                       | *"tree_choice"*                                        | :heavy_check_mark:                                     | N/A                                                    |
| `choicesTree`                                          | [models.TreeChoiceNode](../models/treechoicenode.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `choicesTreeYaml`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |