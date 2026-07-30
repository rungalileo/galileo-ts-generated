# TaskType

Valid task types for modeling.

We store these as ints instead of strings because we will be looking this up in the database frequently.

## Example Usage

```typescript
import { TaskType } from "galileo-generated/models";

let value: TaskType = 17;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

```typescript
7 | 9 | 12 | 13 | 15 | 16 | 17 | 18 | Unrecognized<number>
```