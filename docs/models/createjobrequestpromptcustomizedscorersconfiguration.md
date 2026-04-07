# CreateJobRequestPromptCustomizedScorersConfiguration


## Supported Types

### `models.CustomizedAgenticSessionSuccessGPTScorer`

```typescript
const value: models.CustomizedAgenticSessionSuccessGPTScorer = {
  scorerName: "_customized_agentic_session_success",
  filters: [
    {
      name: "metadata",
      operator: "one_of",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

### `models.CustomizedAgenticWorkflowSuccessGPTScorer`

```typescript
const value: models.CustomizedAgenticWorkflowSuccessGPTScorer = {
  scorerName: "_customized_agentic_workflow_success",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [
        "<value 1>",
      ],
    },
  ],
};
```

### `models.CustomizedChunkAttributionUtilizationGPTScorer`

```typescript
const value: models.CustomizedChunkAttributionUtilizationGPTScorer = {
  scorerName: "_customized_chunk_attribution_utilization_gpt",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedCompletenessGPTScorer`

```typescript
const value: models.CustomizedCompletenessGPTScorer = {
  scorerName: "_customized_completeness_gpt",
  filters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CustomizedFactualityGPTScorer`

```typescript
const value: models.CustomizedFactualityGPTScorer = {
  scorerName: "_customized_factuality",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedGroundTruthAdherenceGPTScorer`

```typescript
const value: models.CustomizedGroundTruthAdherenceGPTScorer = {
  scorerName: "_customized_ground_truth_adherence",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: [
        "<value 1>",
        "<value 2>",
      ],
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedGroundednessGPTScorer`

```typescript
const value: models.CustomizedGroundednessGPTScorer = {
  scorerName: "_customized_groundedness",
  filters: [
    {
      name: "modality",
      operator: "one_of",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CustomizedInputSexistGPTScorer`

```typescript
const value: models.CustomizedInputSexistGPTScorer = {
  scorerName: "_customized_input_sexist_gpt",
  filters: [
    {
      name: "node_name",
      operator: "contains",
      value: [
        "<value 1>",
      ],
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedInputToxicityGPTScorer`

```typescript
const value: models.CustomizedInputToxicityGPTScorer = {
  scorerName: "_customized_input_toxicity_gpt",
  filters: [
    {
      name: "modality",
      operator: "eq",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CustomizedInstructionAdherenceGPTScorer`

```typescript
const value: models.CustomizedInstructionAdherenceGPTScorer = {
  scorerName: "_customized_instruction_adherence",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [
        "<value 1>",
      ],
    },
  ],
};
```

### `models.CustomizedPromptInjectionGPTScorer`

```typescript
const value: models.CustomizedPromptInjectionGPTScorer = {
  scorerName: "_customized_prompt_injection_gpt",
  filters: [
    {
      name: "node_name",
      operator: "not_in",
      value: [
        "<value 1>",
        "<value 2>",
      ],
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedSexistGPTScorer`

```typescript
const value: models.CustomizedSexistGPTScorer = {
  scorerName: "_customized_sexist_gpt",
  filters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CustomizedToolErrorRateGPTScorer`

```typescript
const value: models.CustomizedToolErrorRateGPTScorer = {
  scorerName: "_customized_tool_error_rate",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: [],
      caseSensitive: true,
    },
  ],
};
```

### `models.CustomizedToolSelectionQualityGPTScorer`

```typescript
const value: models.CustomizedToolSelectionQualityGPTScorer = {
  scorerName: "_customized_tool_selection_quality",
  filters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CustomizedToxicityGPTScorer`

```typescript
const value: models.CustomizedToxicityGPTScorer = {
  scorerName: "_customized_toxicity_gpt",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [
        "<value 1>",
      ],
    },
  ],
};
```

