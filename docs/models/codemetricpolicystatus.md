# CodeMetricPolicyStatus

The package-policy state of one code metric's default version.

## Example Usage

```typescript
import { CodeMetricPolicyStatus } from "galileo-generated/models";

let value: CodeMetricPolicyStatus = {
  scorerId: "<value>",
  scorerName: "<value>",
  scorerVersionId: "<value>",
  state: "end_of_life_soon",
  message: "<value>",
  packages: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scorerId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `scorerName`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `scorerVersionId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `state`                                                            | [models.CodeMetricPolicyState](../models/codemetricpolicystate.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `packages`                                                         | [models.PolicyPackageNotice](../models/policypackagenotice.md)[]   | :heavy_check_mark:                                                 | N/A                                                                |