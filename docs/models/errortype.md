# ErrorType

## Example Usage

```typescript
import { ErrorType } from "galileo-generated/models";

let value: ErrorType = "workflow_error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"llm_api_error" | "credentials_error" | "data_validation_error" | "configuration_error" | "permission_error" | "not_found_error" | "workflow_error" | "system_error" | "not_applicable_reason" | "uncataloged_error" | Unrecognized<string>
```