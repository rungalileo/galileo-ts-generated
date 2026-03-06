# RootType

The root-level type of a logged step hierarchy.

Maps fine-grained StepType values to the three top-level categories
used throughout the platform: session, trace, and span.

## Example Usage

```typescript
import { RootType } from "galileo-generated/models";

let value: RootType = "trace";
```

## Values

```typescript
"session" | "trace" | "span"
```