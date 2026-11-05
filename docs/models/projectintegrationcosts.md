# ProjectIntegrationCosts

## Example Usage

```typescript
import { ProjectIntegrationCosts } from "galileo-generated/models";

let value: ProjectIntegrationCosts = {
  projectId: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `projectName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `runId`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `totalCost`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `dataPoints`                                                                 | [models.IntegrationCostsDataPoint](../models/integrationcostsdatapoint.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |