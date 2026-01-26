# Metrics

## Example Usage

```typescript
import { Metrics } from "galileo-generated/models";

let value: Metrics = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `durationNs`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Duration of the trace or span in nanoseconds.  Displayed as 'Latency' in Galileo. |
| `additionalProperties`                                                            | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | N/A                                                                               |