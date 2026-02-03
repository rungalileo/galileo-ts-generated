# Ruleset

## Example Usage

```typescript
import { Ruleset } from "galileo-generated/models";

let value: Ruleset = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rules`                                                | [models.Rule](../models/rule.md)[]                     | :heavy_minus_sign:                                     | List of rules to evaluate. Atleast 1 rule is required. |
| `action`                                               | *models.RulesetAction*                                 | :heavy_minus_sign:                                     | Action to take if all the rules are met.               |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | Description of the ruleset.                            |