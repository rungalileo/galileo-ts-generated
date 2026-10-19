# GetProjectsPaginatedProjectsPaginatedPostRequest

## Example Usage

```typescript
import { GetProjectsPaginatedProjectsPaginatedPostRequest } from "galileo-generated/models/operations";

let value: GetProjectsPaginatedProjectsPaginatedPostRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `actions`                                                                              | *operations.Action*[]                                                                  | :heavy_minus_sign:                                                                     | Actions to include in the 'permissions' field. Deprecated 'update' values are ignored. |
| `startingToken`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `body`                                                                                 | [models.ProjectCollectionParams](../../models/projectcollectionparams.md)              | :heavy_minus_sign:                                                                     | N/A                                                                                    |