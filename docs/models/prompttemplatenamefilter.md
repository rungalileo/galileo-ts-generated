# PromptTemplateNameFilter

## Example Usage

```typescript
import { PromptTemplateNameFilter } from "galileo-generated/models";

let value: PromptTemplateNameFilter = {
  name: "name",
  operator: "one_of",
  value: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *"name"*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `operator`                                                                               | [models.PromptTemplateNameFilterOperator](../models/prompttemplatenamefilteroperator.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `value`                                                                                  | *models.PromptTemplateNameFilterValue*                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `caseSensitive`                                                                          | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |