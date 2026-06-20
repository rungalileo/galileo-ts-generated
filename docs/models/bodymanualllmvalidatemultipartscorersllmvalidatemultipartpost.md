# BodyManualLlmValidateMultipartScorersLlmValidateMultipartPost

## Example Usage

```typescript
import { BodyManualLlmValidateMultipartScorersLlmValidateMultipartPost } from "galileo-generated/models";

let value: BodyManualLlmValidateMultipartScorersLlmValidateMultipartPost = {
  body: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `body`                                             | *string*                                           | :heavy_check_mark:                                 | JSON-encoded GeneratedScorerValidationRequest      |
| `queryFiles`                                       | [models.QueryFile](../models/queryfile.md)[]       | :heavy_minus_sign:                                 | N/A                                                |
| `responseFiles`                                    | [models.ResponseFile](../models/responsefile.md)[] | :heavy_minus_sign:                                 | N/A                                                |