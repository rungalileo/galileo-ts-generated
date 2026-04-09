# RollUpMethodDisplayOptions

Display options for roll up methods when showing rolled up metrics in the UI.

Separates display intent from computation methods. The computation methods
(NumericRollUpMethod, CategoricalRollUpMethod) control what aggregations are available.
This enum controls how the UI displays the selected roll-up value for a scorer.

## Example Usage

```typescript
import { RollUpMethodDisplayOptions } from "galileo-generated/models";

let value: RollUpMethodDisplayOptions = "percentage_true";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"average" | "sum" | "max" | "min" | "category_count" | "percentage_true" | "percentage_false" | Unrecognized<string>
```