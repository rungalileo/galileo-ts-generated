# ScorerExcludeSlmScorersFilter

Internal filter: excludes scorers with model_type == slm while including
scorers where model_type IS NULL. Auto-appended by the service layer.

## Example Usage

```typescript
import { ScorerExcludeSlmScorersFilter } from "galileo-generated/models";

let value: ScorerExcludeSlmScorersFilter = {
  name: "exclude_slm_scorers",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `name`                  | *"exclude_slm_scorers"* | :heavy_check_mark:      | N/A                     |