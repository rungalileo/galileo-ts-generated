# AnnotationScoreAggregate

## Example Usage

```typescript
import { AnnotationScoreAggregate } from "galileo-generated/models";

let value: AnnotationScoreAggregate = {
  annotationType: "score",
  buckets: [],
  average: 657.04,
  unratedCount: 564555,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `annotationType`                                 | *"score"*                                        | :heavy_check_mark:                               | N/A                                              |
| `buckets`                                        | [models.ScoreBucket](../models/scorebucket.md)[] | :heavy_check_mark:                               | N/A                                              |
| `average`                                        | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `unratedCount`                                   | *number*                                         | :heavy_check_mark:                               | N/A                                              |