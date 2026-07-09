# ScorerMultimodalCapabilitiesFilter

Filter scorers by multimodal_capabilities.

Use operator ``contains`` to match scorers that support a single capability
(e.g. ``{"name": "multimodal_capabilities", "operator": "contains", "value": "vision"}``).
Use ``one_of`` to match scorers whose capabilities include ANY of the given
values (e.g. ``{"name": "multimodal_capabilities", "operator": "one_of", "value": ["vision", "audio"]}``).

## Example Usage

```typescript
import { ScorerMultimodalCapabilitiesFilter } from "galileo-generated/models";

let value: ScorerMultimodalCapabilitiesFilter = {
  name: "multimodal_capabilities",
  operator: "contains",
  value: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *"multimodal_capabilities"*                                                                                  | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `operator`                                                                                                   | [models.ScorerMultimodalCapabilitiesFilterOperator](../models/scorermultimodalcapabilitiesfilteroperator.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *models.ScorerMultimodalCapabilitiesFilterValue*                                                             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `caseSensitive`                                                                                              | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |