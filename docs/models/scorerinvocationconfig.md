# ScorerInvocationConfig

How the direct scorer-invoke API validates and serializes inputs.

## Example Usage

```typescript
import { ScorerInvocationConfig } from "galileo-generated/models";

let value: ScorerInvocationConfig = {
  payloadFormat: "response",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `requiredInputs`                                                                   | [models.RequiredInput](../models/requiredinput.md)[]                               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `payloadFormat`                                                                    | [models.ScorerInvocationPayloadFormat](../models/scorerinvocationpayloadformat.md) | :heavy_check_mark:                                                                 | N/A                                                                                |