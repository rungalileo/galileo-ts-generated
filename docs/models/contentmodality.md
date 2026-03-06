# ContentModality

Classification of content modality

## Example Usage

```typescript
import { ContentModality } from "galileo-generated/models";

let value: ContentModality = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "document" | "image" | "audio" | "video" | Unrecognized<string>
```