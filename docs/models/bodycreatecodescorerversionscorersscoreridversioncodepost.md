# BodyCreateCodeScorerVersionScorersScorerIdVersionCodePost

## Example Usage

```typescript
import { BodyCreateCodeScorerVersionScorersScorerIdVersionCodePost } from "galileo-generated/models";

let value: BodyCreateCodeScorerVersionScorersScorerIdVersionCodePost = {
  file: "<value>",
  validationResult: "<value>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `validationResult`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The result from the validate endpoint, as a JSON string. Only its task_id is read: the version is built from the result stored for that validation task. |