# InputModality

Types of input that a model can accept.

## Example Usage

```typescript
import { InputModality } from "galileo-generated/models";

let value: InputModality = "image";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"audio" | "document" | "image" | "text" | Unrecognized<string>
```