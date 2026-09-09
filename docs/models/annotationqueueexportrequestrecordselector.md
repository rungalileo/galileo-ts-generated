# AnnotationQueueExportRequestRecordSelector

Selector to specify which queue records to export (either by record IDs or filter tree)


## Supported Types

### `models.AnnotationQueueRecordsByFilterTree`

```typescript
const value: models.AnnotationQueueRecordsByFilterTree = {
  type: "filter_tree",
  filterTree: {
    not: {
      and: [],
    },
  },
};
```

### `models.AnnotationQueueRecordsByRecordIDs`

```typescript
const value: models.AnnotationQueueRecordsByRecordIDs = {
  type: "record_ids",
  recordIds: [
    "<value 1>",
  ],
};
```

