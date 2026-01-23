# ScorerTypes

## Example Usage

```typescript
import { ScorerTypes } from "galileo-generated/models";

let value: ScorerTypes = "llm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"llm" | "code" | "luna" | "preset" | Unrecognized<string>
```