# OverrideAction

## Example Usage

```typescript
import { OverrideAction } from "galileo-generated/models";

let value: OverrideAction = {
  type: "OVERRIDE",
  choices: [],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | *"OVERRIDE"*                                                                                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `subscriptions`                                                                                                                            | [models.SubscriptionConfig](../models/subscriptionconfig.md)[]                                                                             | :heavy_minus_sign:                                                                                                                         | List of subscriptions to send a notification to when this action is applied and the ruleset status matches any of the configured statuses. |
| `choices`                                                                                                                                  | *string*[]                                                                                                                                 | :heavy_check_mark:                                                                                                                         | List of choices to override the response with. If there are multiple choices, one will be chosen at random when applying this action.      |