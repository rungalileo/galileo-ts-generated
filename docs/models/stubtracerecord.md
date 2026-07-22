# StubTraceRecord

Placeholder for a trace referenced by spans but not yet ingested.

Synthesized when one or more spans declare trace_id=X but no
TraceRecord with that id exists in storage. Holds the orphan spans
together so the client can render them under a single root.

Extends ExtendedRecordWithChildSpans so isinstance checks work
uniformly for both real and stub traces.

## Example Usage

```typescript
import { StubTraceRecord } from "galileo-generated/models";

let value: StubTraceRecord = {
  type: "stub_trace",
  id: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `spans`                                                                        | *models.StubTraceRecordSpan*[]                                                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"stub_trace"*                                                                 | :heavy_check_mark:                                                             | Discriminator; identifies this as a synthesized placeholder, not a real trace. |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | ID of the missing trace, taken from span trace_id references.                  |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Project ID inferred from child spans, if all agree; otherwise None.            |
| `runId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Run ID inferred from child spans, if all agree; otherwise None.                |
| `sessionId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Session ID inferred from child spans, if all agree; otherwise None.            |