# RegisteredScorerTaskResultResponse

## Example Usage

```typescript
import { RegisteredScorerTaskResultResponse } from "galileo-generated/models";

let value: RegisteredScorerTaskResultResponse = {
  id: "<value>",
  createdAt: new Date("2025-04-22T20:06:20.013Z"),
  updatedAt: new Date("2026-12-29T23:32:42.191Z"),
  status: "failed",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.TaskResultStatus](../models/taskresultstatus.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | *models.RegisteredScorerTaskResultResponseResult*                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |