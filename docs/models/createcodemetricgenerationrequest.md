# CreateCodeMetricGenerationRequest

Request to generate scorer code from a user message.

## Example Usage

```typescript
import { CreateCodeMetricGenerationRequest } from "galileo-generated/models";

let value: CreateCodeMetricGenerationRequest = {
  userMessage: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `userMessage`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Natural language, code, or combination                                               |
| `nodeType`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Selected scoreable node type (llm, retriever, trace, agent, workflow, tool, session) |
| `modelName`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Model alias to use for generation. Defaults to best available.                       |