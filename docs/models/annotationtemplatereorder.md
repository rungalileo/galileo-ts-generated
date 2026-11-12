# AnnotationTemplateReorder

Request to re-order the annotation templates of a project.

- Expects a list of strings where each string is the ID of a template in the project in the order
we want the templates to appear in.
- Expects the list to be complete list of all template IDs.

## Example Usage

```typescript
import { AnnotationTemplateReorder } from "galileo-generated/models";

let value: AnnotationTemplateReorder = {
  ordering: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ordering`         | *string*[]         | :heavy_check_mark: | N/A                |