# ScorerMetadataSelection

Select all metadata or specific user-metadata keys for trace and span inputs.

## Example Usage

```typescript
import { ScorerMetadataSelection } from "galileo-generated/models";

let value: ScorerMetadataSelection = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `trace`                                                                                     | *models.ScorerMetadataSelectionTrace*                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `spans`                                                                                     | *models.Spans*                                                                              | :heavy_minus_sign:                                                                          | Omit or set to null to follow the named span fields. Set to false to disable span metadata. |