# ScorerScopeProjectsFilter

Matches scorers whose access scope (scorer_projects) includes ANY of the
given project ids. include_global=True additionally matches global scorers
("metrics available in project X").

Distinct from the run-usage "projects used" relation (scorers_to_projects /
GET /scorers/{scorer_id}/projects), which tracks where a scorer has run.

## Example Usage

```typescript
import { ScorerScopeProjectsFilter } from "galileo-generated/models";

let value: ScorerScopeProjectsFilter = {
  name: "scope_projects",
  projectIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *"scope_projects"* | :heavy_check_mark: | N/A                |
| `projectIds`       | *string*[]         | :heavy_check_mark: | N/A                |
| `includeGlobal`    | *boolean*          | :heavy_minus_sign: | N/A                |