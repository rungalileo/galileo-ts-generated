# OutputTypeEnum

Enumeration of output types.

## Example Usage

```typescript
import { OutputTypeEnum } from "galileo-generated/models";

let value: OutputTypeEnum = "categorical";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"boolean" | "categorical" | "count" | "discrete" | "freeform" | "percentage" | "multilabel" | "retrieved_chunk_list_boolean" | "boolean_multilabel" | Unrecognized<string>
```