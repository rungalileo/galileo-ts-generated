# AgentType

## Example Usage

```typescript
import { AgentType } from "galileo-generated/models";

let value: AgentType = "reflection";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"default" | "planner" | "react" | "reflection" | "router" | "classifier" | "supervisor" | "judge" | Unrecognized<string>
```