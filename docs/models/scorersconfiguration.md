# ScorersConfiguration

Configure which scorers to enable for a particular prompt run.

The keys here are sorted by their approximate execution time to execute the scorers that we anticipate will be the
fastest first, and the slowest last.

## Example Usage

```typescript
import { ScorersConfiguration } from "galileo-generated/models";

let value: ScorersConfiguration = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `latency`                        | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `cost`                           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `pii`                            | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputPii`                       | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `bleu`                           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `rouge`                          | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `protectStatus`                  | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `contextRelevance`               | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toxicity`                       | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputToxicity`                  | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `tone`                           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputTone`                      | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `sexist`                         | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputSexist`                    | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `promptInjection`                | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `adherenceNli`                   | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `chunkAttributionUtilizationNli` | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `contextAdherenceLuna`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `contextRelevanceLuna`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `completenessNli`                | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toolErrorRateLuna`              | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toolSelectionQualityLuna`       | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `actionCompletionLuna`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `actionAdvancementLuna`          | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `uncertainty`                    | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `factuality`                     | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `groundedness`                   | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `promptPerplexity`               | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `chunkAttributionUtilizationGpt` | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `completenessGpt`                | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `instructionAdherence`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `groundTruthAdherence`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toolSelectionQuality`           | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toolErrorRate`                  | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `agenticSessionSuccess`          | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `agenticWorkflowSuccess`         | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `promptInjectionGpt`             | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `sexistGpt`                      | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputSexistGpt`                 | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `toxicityGpt`                    | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `inputToxicityGpt`               | *boolean*                        | :heavy_minus_sign:               | N/A                              |