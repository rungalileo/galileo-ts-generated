# EnvironmentTier

Which execution environment serves a scorer version.

``standard`` is the platform-curated set baked into the executor image, so
it has no ``environments`` row -- but it does have a hash, the digest of
the pin list the image was built from. ``custom`` is resolved on demand and
gets a content-addressed row plus a warm parent of its own.

## Example Usage

```typescript
import { EnvironmentTier } from "galileo-generated/models";

let value: EnvironmentTier = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "custom" | Unrecognized<string>
```