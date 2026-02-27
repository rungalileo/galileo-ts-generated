# ContentModality

Classification of content modality

## Example Usage

```typescript
import { ContentModality } from "galileo-generated/models";

let value: ContentModality = "document";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "document" | "image" | "audio" | "video" | "webpage" | "unknown" | Unrecognized<string>
```