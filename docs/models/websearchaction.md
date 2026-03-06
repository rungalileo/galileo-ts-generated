# WebSearchAction

Action payload for a web search call event.

## Example Usage

```typescript
import { WebSearchAction } from "galileo-generated/models";

let value: WebSearchAction = {
  type: "search",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *"search"*                         | :heavy_check_mark:                 | Type of web search action          |
| `query`                            | *string*                           | :heavy_minus_sign:                 | Search query string                |
| `sources`                          | *any*                              | :heavy_minus_sign:                 | Optional provider-specific sources |