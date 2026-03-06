# Edit


## Supported Types

### `models.DatasetAppendRow`

```typescript
const value: models.DatasetAppendRow = {
  editType: "append_row",
  values: {
    "key": "<value>",
  },
};
```

### `models.DatasetCopyRecordData`

```typescript
const value: models.DatasetCopyRecordData = {
  editType: "copy_record_data",
  projectId: "<value>",
  ids: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.DatasetDeleteRow`

```typescript
const value: models.DatasetDeleteRow = {
  rowId: "<value>",
  editType: "delete_row",
};
```

### `models.DatasetFilterRows`

```typescript
const value: models.DatasetFilterRows = {
  editType: "filter_rows",
  rowIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.DatasetPrependRow`

```typescript
const value: models.DatasetPrependRow = {
  editType: "prepend_row",
  values: {},
};
```

### `models.DatasetUpdateRow`

```typescript
const value: models.DatasetUpdateRow = {
  rowId: "<value>",
  editType: "update_row",
  values: {},
};
```

