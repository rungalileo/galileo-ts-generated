# Luna3ScorerResponse

## Example Usage

```typescript
import { Luna3ScorerResponse } from "galileo-generated/models";

let value: Luna3ScorerResponse = {
  instruction: "<value>",
  adapterPath: "<value>",
  classNameToVocabIx: {
    "key": [
      997202,
      762268,
      900353,
    ],
  },
  id: "<value>",
  organizationId: "<value>",
  createdAt: new Date("2024-03-08T07:48:40.100Z"),
  updatedAt: new Date("2025-12-25T05:24:56.040Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `instruction`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `adapterPath`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classNameToVocabIx`                                                                          | Record<string, *number*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `threshold`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |