# TaskType

Valid task types for modeling.

We store these as ints instead of strings because we will be looking this up in the database frequently.

## Example Usage

```typescript
import { TaskType } from "galileo-generated/models";

let value: TaskType = 15;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | Unrecognized<number>
```