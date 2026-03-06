# OAuth2PasswordBearerCredentials

OAuth2 Resource Owner Password Flow credentials

## Example Usage

```typescript
import { OAuth2PasswordBearerCredentials } from "galileo-generated/models";

let value: OAuth2PasswordBearerCredentials = {
  username: "Rosendo.Boyer88",
  password: "puYN4zMswa2ONkb",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `username`         | *string*           | :heavy_check_mark: | N/A                |
| `password`         | *string*           | :heavy_check_mark: | N/A                |
| `clientID`         | *string*           | :heavy_minus_sign: | N/A                |
| `clientSecret`     | *string*           | :heavy_minus_sign: | N/A                |
| `tokenURL`         | *string*           | :heavy_check_mark: | N/A                |