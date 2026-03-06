# RunParamsMap

Maps the internal settings parameters (left) to the serialized parameters (right) we want to send in the API
requests.

## Example Usage

```typescript
import { RunParamsMap } from "galileo-generated/models";

let value: RunParamsMap = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `model`            | *string*           | :heavy_minus_sign: | N/A                |
| `temperature`      | *string*           | :heavy_minus_sign: | N/A                |
| `maxTokens`        | *string*           | :heavy_minus_sign: | N/A                |
| `stopSequences`    | *string*           | :heavy_minus_sign: | N/A                |
| `topP`             | *string*           | :heavy_minus_sign: | N/A                |
| `topK`             | *string*           | :heavy_minus_sign: | N/A                |
| `frequencyPenalty` | *string*           | :heavy_minus_sign: | N/A                |
| `presencePenalty`  | *string*           | :heavy_minus_sign: | N/A                |
| `echo`             | *string*           | :heavy_minus_sign: | N/A                |
| `logprobs`         | *string*           | :heavy_minus_sign: | N/A                |
| `topLogprobs`      | *string*           | :heavy_minus_sign: | N/A                |
| `n`                | *string*           | :heavy_minus_sign: | N/A                |
| `apiVersion`       | *string*           | :heavy_minus_sign: | N/A                |
| `tools`            | *string*           | :heavy_minus_sign: | N/A                |
| `toolChoice`       | *string*           | :heavy_minus_sign: | N/A                |
| `responseFormat`   | *string*           | :heavy_minus_sign: | N/A                |
| `reasoningEffort`  | *string*           | :heavy_minus_sign: | N/A                |
| `verbosity`        | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentName`   | *string*           | :heavy_minus_sign: | N/A                |