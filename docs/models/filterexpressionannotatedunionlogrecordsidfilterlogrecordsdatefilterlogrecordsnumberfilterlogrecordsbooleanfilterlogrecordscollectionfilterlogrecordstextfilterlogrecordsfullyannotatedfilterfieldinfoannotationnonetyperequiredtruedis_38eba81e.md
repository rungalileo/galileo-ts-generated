# FilterExpressionAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType


## Supported Types

### `models.FilterLeafAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType`

```typescript
const value:
  models.FilterLeafAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType =
    {
      filter: {
        type: "fully_annotated",
      },
    };
```

### `models.AndNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType`

```typescript
const value:
  models.AndNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType =
    {
      and: [
        {
          filter: {
            columnId: "<id>",
            operator: "eq",
            value: "<value>",
            type: "id",
          },
        },
      ],
    };
```

### `models.OrNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType`

```typescript
const value:
  models.OrNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType =
    {
      or: [],
    };
```

### `models.NotNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType`

```typescript
const value:
  models.NotNodeAnnotatedUnionLogRecordsIDFilterLogRecordsDateFilterLogRecordsNumberFilterLogRecordsBooleanFilterLogRecordsCollectionFilterLogRecordsTextFilterLogRecordsFullyAnnotatedFilterFieldInfoAnnotationNoneTypeRequiredTrueDiscriminatorType =
    {
      not: {
        or: [
          {
            and: [],
          },
        ],
      },
    };
```

