# EditAction

The available actions you can take in an edit.

## Example Usage

```typescript
import { EditAction } from "galileo-generated/models";

let value: EditAction = "shift_span";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"relabel" | "delete" | "select_for_label" | "relabel_as_pred" | "update_text" | "shift_span" | "add_span" | "create_new_label" | Unrecognized<string>
```