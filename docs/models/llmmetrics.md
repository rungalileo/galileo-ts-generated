# LlmMetrics

## Example Usage

```typescript
import { LlmMetrics } from "galileo-generated/models";

let value: LlmMetrics = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `durationNs`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Duration of the trace or span in nanoseconds.  Displayed as 'Latency' in Galileo. |
| `numInputTokens`                                                                  | *number*                                                                          | :heavy_minus_sign:                                                                | Number of input tokens.                                                           |
| `numOutputTokens`                                                                 | *number*                                                                          | :heavy_minus_sign:                                                                | Number of output tokens.                                                          |
| `numTotalTokens`                                                                  | *number*                                                                          | :heavy_minus_sign:                                                                | Total number of tokens.                                                           |
| `timeToFirstTokenNs`                                                              | *number*                                                                          | :heavy_minus_sign:                                                                | Time until the first token was generated in nanoseconds.                          |
| `additionalProperties`                                                            | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | N/A                                                                               |