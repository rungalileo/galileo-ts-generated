# NodeType

## Example Usage

```typescript
import { NodeType } from "galileo-generated/models";

let value: NodeType = "tool";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"chain" | "chat" | "llm" | "retriever" | "tool" | "agent" | "workflow" | "trace" | "session" | Unrecognized<string>
```