# MultiModalModelIntegrationConfig

Configuration for multi-modal capabilities (file uploads).

## Example Usage

```typescript
import { MultiModalModelIntegrationConfig } from "galileo-generated/models";

let value: MultiModalModelIntegrationConfig = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `maxFiles`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Maximum number of files allowed per request. None means no limit. |
| `maxFileSizeBytes`                                                | *number*                                                          | :heavy_minus_sign:                                                | Maximum file size in bytes per file. None means no limit.         |