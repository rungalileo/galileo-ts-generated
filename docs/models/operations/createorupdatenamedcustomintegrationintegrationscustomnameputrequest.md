# CreateOrUpdateNamedCustomIntegrationIntegrationsCustomNamePutRequest

## Example Usage

```typescript
import { CreateOrUpdateNamedCustomIntegrationIntegrationsCustomNamePutRequest } from "galileo-generated/models/operations";

let value:
  CreateOrUpdateNamedCustomIntegrationIntegrationsCustomNamePutRequest = {
    name: "<value>",
    body: {
      endpoint: "<value>",
    },
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Slug identifying this named custom integration                            |
| `body`                                                                    | [models.CustomIntegrationCreate](../../models/customintegrationcreate.md) | :heavy_check_mark:                                                        | N/A                                                                       |