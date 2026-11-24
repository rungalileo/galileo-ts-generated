# PolicyPackageNotice

## Example Usage

```typescript
import { PolicyPackageNotice } from "galileo-generated/models";

let value: PolicyPackageNotice = {
  package: "<value>",
  version: "<value>",
  reason: "end_of_life",
  advisoryId: "<id>",
  blockedFrom: null,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `package`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `version`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `reason`                                               | [models.ViolationReason](../models/violationreason.md) | :heavy_check_mark:                                     | N/A                                                    |
| `advisoryId`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `blockedFrom`                                          | [Date](../types/rfcdate.md)                            | :heavy_check_mark:                                     | N/A                                                    |