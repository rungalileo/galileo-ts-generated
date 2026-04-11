# ScorerExcludeMultimodalScorersFilter

Internal filter: excludes multimodal scorers (non-empty multimodal_capabilities).

Auto-appended by the service layer when the `multimodal` feature flag is disabled.

## Example Usage

```typescript
import { ScorerExcludeMultimodalScorersFilter } from "galileo-generated/models";

let value: ScorerExcludeMultimodalScorersFilter = {
  name: "exclude_multimodal_scorers",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *"exclude_multimodal_scorers"* | :heavy_check_mark:             | N/A                            |