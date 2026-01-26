# ModelType

## Example Usage

```typescript
import { ModelType } from "galileo-generated/models";

let value: ModelType = "slm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"slm" | "llm" | "code" | Unrecognized<string>
```