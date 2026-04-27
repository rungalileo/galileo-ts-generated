# MetricColor

Allowed colors for metric threshold visualization in the UI.

## Example Usage

```typescript
import { MetricColor } from "galileo-generated/models";

let value: MetricColor = "yellow";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"red" | "yellow" | "green" | Unrecognized<string>
```