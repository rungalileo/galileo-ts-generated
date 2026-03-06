# VertexAIGCSConfig

Configuration for GCS file uploads in Vertex AI.

## Example Usage

```typescript
import { VertexAIGCSConfig } from "galileo-generated/models";

let value: VertexAIGCSConfig = {
  serviceAccountCredentials: "<value>",
  bucketName: "<value>",
  objectPathPrefix: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `serviceAccountCredentials` | *string*                    | :heavy_check_mark:          | N/A                         |
| `bucketName`                | *string*                    | :heavy_check_mark:          | N/A                         |
| `objectPathPrefix`          | *string*                    | :heavy_check_mark:          | N/A                         |