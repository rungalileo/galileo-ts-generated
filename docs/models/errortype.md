# ErrorType

## Example Usage

```typescript
import { ErrorType } from "galileo-generated/models";

let value: ErrorType = "system_error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"llm_api_error" | "credentials_error" | "data_validation_error" | "configuration_error" | "permission_error" | "not_found_error" | "workflow_error" | "rate_limit_error" | "system_error" | "timeout_error" | "not_applicable_reason" | "uncataloged_error" | Unrecognized<string>
```