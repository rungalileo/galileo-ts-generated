# SyntheticDatasetExtensionRequest

Request for a synthetic dataset run job.

## Example Usage

```typescript
import { SyntheticDatasetExtensionRequest } from "galileo-generated/models";

let value: SyntheticDatasetExtensionRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `promptSettings`                                                             | [models.PromptRunSettings](../models/promptrunsettings.md)                   | :heavy_minus_sign:                                                           | Prompt run settings.                                                         |
| `prompt`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `instructions`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `examples`                                                                   | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sourceDataset`                                                              | [models.SyntheticDataSourceDataset](../models/syntheticdatasourcedataset.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `dataTypes`                                                                  | [models.SyntheticDataTypes](../models/syntheticdatatypes.md)[]               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `count`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |