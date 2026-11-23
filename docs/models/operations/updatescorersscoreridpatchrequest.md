# UpdateScorersScorerIdPatchRequest

## Example Usage

```typescript
import { UpdateScorersScorerIdPatchRequest } from "galileo-generated/models/operations";

let value: UpdateScorersScorerIdPatchRequest = {
  scorerId: "<value>",
  body: {
    defaults: {
      filters: [
        {
          name: "metadata",
          operator: "regex",
          key: "<key>",
          value: "<value>",
          caseSensitive: true,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `scorerId`                                                        | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `body`                                                            | [models.UpdateScorerRequest](../../models/updatescorerrequest.md) | :heavy_check_mark:                                                | N/A                                                               |