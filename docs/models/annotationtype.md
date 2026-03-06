# AnnotationType

## Example Usage

```typescript
import { AnnotationType } from "galileo-generated/models";

let value: AnnotationType = "tags";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"like_dislike" | "star" | "score" | "tags" | "text" | Unrecognized<string>
```