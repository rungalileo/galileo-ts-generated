# ScorerExcludeNonO11ySlmScorersFilter

Internal filter: like ScorerExcludeSlmScorersFilter, but keeps the Luna metrics cleared
for the O11y launch. Auto-appended when the `o11y_luna_metrics` restriction is on.

## Example Usage

```typescript
import { ScorerExcludeNonO11ySlmScorersFilter } from "galileo-generated/models";

let value: ScorerExcludeNonO11ySlmScorersFilter = {
  name: "exclude_non_o11y_slm_scorers",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `name`                           | *"exclude_non_o11y_slm_scorers"* | :heavy_check_mark:               | N/A                              |