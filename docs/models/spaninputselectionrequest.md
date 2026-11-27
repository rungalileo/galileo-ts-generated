# SpanInputSelectionRequest

Select at least one input field for the named span.

## Example Usage

```typescript
import { SpanInputSelectionRequest } from "galileo-generated/models";

let value: SpanInputSelectionRequest = {
  spanName: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `spanName`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fields`                                                                               | [models.SpanInputSelectionRequestField](../models/spaninputselectionrequestfield.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |