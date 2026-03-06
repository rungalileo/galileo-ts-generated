# VertexAIGCSConfigResponse

GCS config response model — credentials are never exposed in GET responses.

## Example Usage

```typescript
import { VertexAIGCSConfigResponse } from "galileo-generated/models";

let value: VertexAIGCSConfigResponse = {
  bucketName: "<value>",
  objectPathPrefix: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `bucketName`       | *string*           | :heavy_check_mark: | N/A                |
| `objectPathPrefix` | *string*           | :heavy_check_mark: | N/A                |