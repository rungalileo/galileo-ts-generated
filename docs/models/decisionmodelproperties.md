# DecisionModelProperties

One decision model that a custom integration serves. The registry entry of the same name supplies the rest.

## Example Usage

```typescript
import { DecisionModelProperties } from "galileo-generated/models";

let value: DecisionModelProperties = {
  name: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Name of a decision model that a custom integration can serve, such as 'kairos-jev'. |