# RulesetResult

## Example Usage

```typescript
import { RulesetResult } from "galileo-generated/models";

let value: RulesetResult = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [models.ExecutionStatus](../models/executionstatus.md) | :heavy_minus_sign:                                     | Status of the execution.                               |
| `rules`                                                | [models.Rule](../models/rule.md)[]                     | :heavy_minus_sign:                                     | List of rules to evaluate. Atleast 1 rule is required. |
| `action`                                               | *models.RulesetResultAction*                           | :heavy_minus_sign:                                     | Action to take if all the rules are met.               |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | Description of the ruleset.                            |
| `ruleResults`                                          | [models.RuleResult](../models/ruleresult.md)[]         | :heavy_minus_sign:                                     | Results of the rule execution.                         |