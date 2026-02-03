# WebSearchCallEvent

An OpenAI-style web search call event.

## Example Usage

```typescript
import { WebSearchCallEvent } from "galileo-generated/models";

let value: WebSearchCallEvent = {
  type: "web_search_call",
  action: {
    type: "search",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"web_search_call"*                                    | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | Unique identifier for the event                        |
| `status`                                               | [models.EventStatus](../models/eventstatus.md)         | :heavy_minus_sign:                                     | Status of the event                                    |
| `metadata`                                             | Record<string, *any*>                                  | :heavy_minus_sign:                                     | Provider-specific metadata and additional fields       |
| `errorMessage`                                         | *string*                                               | :heavy_minus_sign:                                     | Error message if the event failed                      |
| `action`                                               | [models.WebSearchAction](../models/websearchaction.md) | :heavy_check_mark:                                     | Action payload for a web search call event.            |