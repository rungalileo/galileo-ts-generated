# Split

## Example Usage

```typescript
import { Split } from "galileo-generated/models";

let value: Split = "validation";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"training" | "validation" | "test" | "inference" | Unrecognized<string>
```