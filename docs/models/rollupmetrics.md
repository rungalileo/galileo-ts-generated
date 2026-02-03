# RollUpMetrics

Roll up metrics e.g. sum, average, min, max for numeric, and category_count for categorical metrics.


## Supported Types

### `{ [k: string]: number }`

```typescript
const value: { [k: string]: number } = {
  "key": 729.36,
};
```

### `{ [k: string]: { [k: string]: number } }`

```typescript
const value: { [k: string]: { [k: string]: number } } = {
  "key": {
    "key": 525548,
  },
  "key1": {
    "key": 925551,
    "key1": 960510,
    "key2": 318682,
  },
};
```

