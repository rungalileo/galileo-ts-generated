# ModalityFilter

Filters on content modalities in scorer jobs.
Matches if at least one of the specified modalities is present.

## Example Usage

```typescript
import { ModalityFilter } from "galileo-generated/models";

let value: ModalityFilter = {
  name: "modality",
  operator: "not_in",
  value: "ENUM_VALUE",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"modality"*                                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `operator`                                                           | [models.ModalityFilterOperator](../models/modalityfilteroperator.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `value`                                                              | *models.ModalityFilterValue*                                         | :heavy_check_mark:                                                   | N/A                                                                  |