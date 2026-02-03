# PromptPerplexityScorer

## Example Usage

```typescript
import { PromptPerplexityScorer } from "galileo-generated/models";

let value: PromptPerplexityScorer = {
  name: "prompt_perplexity",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"prompt_perplexity"*                   | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.PromptPerplexityScorerFilter*[] | :heavy_minus_sign:                      | List of filters to apply to the scorer. |