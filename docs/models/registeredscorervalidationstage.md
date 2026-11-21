# RegisteredScorerValidationStage

The step a code scorer save validation runs now, reported while the task result is pending.

## Example Usage

```typescript
import { RegisteredScorerValidationStage } from "galileo-generated/models";

let value: RegisteredScorerValidationStage = "scanning_code";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"checking_dependencies" | "scanning_code" | "preparing_environment" | "running_test" | Unrecognized<string>
```