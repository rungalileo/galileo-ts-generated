# CodeMetricPolicyStatusResponse

## Example Usage

```typescript
import { CodeMetricPolicyStatusResponse } from "galileo-generated/models";

let value: CodeMetricPolicyStatusResponse = {
  scorers: [
    {
      scorerId: "<value>",
      scorerName: "<value>",
      scorerVersionId: "<value>",
      state: "blocked",
      message: "<value>",
      packages: [
        {
          package: "<value>",
          version: "<value>",
          reason: "end_of_life",
          advisoryId: "<id>",
          blockedFrom: new Date("2026-07-07"),
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scorers`                                                              | [models.CodeMetricPolicyStatus](../models/codemetricpolicystatus.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |