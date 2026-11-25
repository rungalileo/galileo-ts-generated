# CreditBalance

## Example Usage

```typescript
import { CreditBalance } from "galileo-generated/models";

let value: CreditBalance = {
  organizationId: "c96c851f-63e8-4150-81f8-fe1eb381c479",
  grantedTokens: 260718,
  consumedTokens: 558303,
  reservedTokens: 811841,
  availableTokens: 756078,
  exhausted: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `unit`             | *"input_tokens"*   | :heavy_minus_sign: | N/A                |
| `grantedTokens`    | *number*           | :heavy_check_mark: | N/A                |
| `consumedTokens`   | *number*           | :heavy_check_mark: | N/A                |
| `reservedTokens`   | *number*           | :heavy_check_mark: | N/A                |
| `availableTokens`  | *number*           | :heavy_check_mark: | N/A                |
| `eligible`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `exhausted`        | *boolean*          | :heavy_check_mark: | N/A                |