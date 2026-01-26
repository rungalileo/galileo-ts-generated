# StepType

## Example Usage

```typescript
import { StepType } from "galileo-generated/models";

let value: StepType = "llm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"llm" | "retriever" | "tool" | "workflow" | "agent" | "trace" | "session" | Unrecognized<string>
```