# DataType

## Example Usage

```typescript
import { DataType } from "galileo-generated/models";

let value: DataType = "tags_rating_aggregate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"uuid" | "text" | "integer" | "floating_point" | "boolean" | "timestamp" | "string_list" | "tag" | "dataset" | "prompt" | "playground" | "rank" | "score_rating_aggregate" | "star_rating_aggregate" | "thumb_rating_aggregate" | "tags_rating_aggregate" | "text_rating_aggregate" | Unrecognized<string>
```