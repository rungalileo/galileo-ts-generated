<!-- Start SDK Example Usage [usage] -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated({
  apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await galileoGenerated.health.healthcheckHealthcheckGet();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->