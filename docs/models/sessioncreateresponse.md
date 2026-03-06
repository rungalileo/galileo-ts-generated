# SessionCreateResponse

## Example Usage

```typescript
import { SessionCreateResponse } from "galileo-generated/models";

let value: SessionCreateResponse = {
  id: "<value>",
  name: "<value>",
  projectId: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Session id associated with the session.   |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | Name of the session.                      |
| `projectId`                               | *string*                                  | :heavy_check_mark:                        | Project id associated with the session.   |
| `projectName`                             | *string*                                  | :heavy_check_mark:                        | Project name associated with the session. |
| `previousSessionId`                       | *string*                                  | :heavy_minus_sign:                        | Id of the previous session.               |
| `externalId`                              | *string*                                  | :heavy_minus_sign:                        | External id of the session.               |