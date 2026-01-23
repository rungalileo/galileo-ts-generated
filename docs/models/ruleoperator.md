# RuleOperator

## Example Usage

```typescript
import { RuleOperator } from "galileo-generated/models";

let value: RuleOperator = "neq";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"gt" | "lt" | "gte" | "lte" | "eq" | "neq" | "contains" | "all" | "any" | "empty" | "not_empty" | Unrecognized<string>
```