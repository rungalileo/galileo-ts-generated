# SpanInputSelection

Select the input fields included for spans with this name.

## Example Usage

```typescript
import { SpanInputSelection } from "galileo-generated/models";

let value: SpanInputSelection = {
  spanName: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `spanName`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `fields`                                                                 | [models.SpanInputSelectionField](../models/spaninputselectionfield.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |