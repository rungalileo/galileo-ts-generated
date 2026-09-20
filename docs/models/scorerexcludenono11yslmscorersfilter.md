# ScorerExcludeNonO11ySlmScorersFilter

Internal filter: like ScorerExcludeSlmScorersFilter, but keeps the Luna metrics cleared
for the O11y launch. Auto-appended by the service layer when the `o11y_luna_metrics`
carve-out is on, in place of the exclude-all filter.

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