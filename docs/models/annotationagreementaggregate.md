# AnnotationAgreementAggregate

## Example Usage

```typescript
import { AnnotationAgreementAggregate } from "galileo-generated/models";

let value: AnnotationAgreementAggregate = {
  buckets: [
    {
      minInclusive: 7308.66,
      maxExclusive: 9894.47,
      count: 305802,
    },
  ],
  averageAgreement: 1053.21,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `buckets`                                                                    | [models.AnnotationAgreementBucket](../models/annotationagreementbucket.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `averageAgreement`                                                           | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |