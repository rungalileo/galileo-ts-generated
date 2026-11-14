<!-- Start SDK Example Usage [usage] -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  oAuth2PasswordBearer: process.env["GALILEOGENERATED_O_AUTH2_PASSWORD_BEARER"]
    ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->