# InputTypeEnum

Enumeration of input types.

## Example Usage

```typescript
import { InputTypeEnum } from "galileo-generated/models";

let value: InputTypeEnum = "sessions_normalized";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"basic" | "llm_spans" | "retriever_spans" | "sessions_normalized" | "sessions_trace_io_only" | "tool_spans" | "trace_input_only" | "trace_io_only" | "trace_normalized" | "trace_output_only" | "agent_spans" | "workflow_spans" | Unrecognized<string>
```