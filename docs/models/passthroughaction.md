# PassthroughAction

## Example Usage

```typescript
import { PassthroughAction } from "galileo-generated/models";

let value: PassthroughAction = {
  type: "PASSTHROUGH",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | *"PASSTHROUGH"*                                                                                                                            | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `subscriptions`                                                                                                                            | [models.SubscriptionConfig](../models/subscriptionconfig.md)[]                                                                             | :heavy_minus_sign:                                                                                                                         | List of subscriptions to send a notification to when this action is applied and the ruleset status matches any of the configured statuses. |