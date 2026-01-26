# SubscriptionConfig

## Example Usage

```typescript
import { SubscriptionConfig } from "galileo-generated/models";

let value: SubscriptionConfig = {
  url: "https://natural-rubric.net",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statuses`                                                                                                                                         | [models.ExecutionStatus](../models/executionstatus.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                                 | List of statuses that will cause a notification to be sent to the configured URL.                                                                  |
| `url`                                                                                                                                              | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | URL to send the event to. This can be a webhook URL, a message queue URL, an event bus or a custom endpoint that can receive an HTTP POST request. |