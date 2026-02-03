# TaggingSchema

Supported NER Tagging schemas.

A tagging schema is a definition of the way NER data is formatted. The schema
letters define the tags used within it.
    ex:
        BIOES - B means before (a token), I means in (a token),
            E means end (of a token), S means single (length token)
See https://en.wikipedia.org/wiki/Inside%E2%80%93outside%E2%80%93beginning_(tagging)

## Example Usage

```typescript
import { TaggingSchema } from "galileo-generated/models";

let value: TaggingSchema = "BILOU";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"BIO" | "BIOES" | "BILOU" | Unrecognized<string>
```