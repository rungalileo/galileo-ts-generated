# UpdateScorerScopeRequest

Full-replace access scope update for a scorer (Share / manage visibility).

is_global=True promotes the scorer to global (org admin only; project_ids
must be empty). is_global=False scopes the scorer to exactly project_ids.

## Example Usage

```typescript
import { UpdateScorerScopeRequest } from "galileo-generated/models";

let value: UpdateScorerScopeRequest = {
  isGlobal: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `isGlobal`         | *boolean*          | :heavy_check_mark: | N/A                |
| `projectIds`       | *string*[]         | :heavy_minus_sign: | N/A                |