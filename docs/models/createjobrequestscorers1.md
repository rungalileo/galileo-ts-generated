# CreateJobRequestScorers1


## Supported Types

### `models.AgenticSessionSuccessScorer`

```typescript
const value: models.AgenticSessionSuccessScorer = {
  name: "agentic_session_success",
  filters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.AgenticWorkflowSuccessScorer`

```typescript
const value: models.AgenticWorkflowSuccessScorer = {
  name: "agentic_workflow_success",
  filters: [
    {
      name: "modality",
      operator: "eq",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.CompletenessScorer`

```typescript
const value: models.CompletenessScorer = {
  name: "completeness",
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

### `models.ContextAdherenceScorer`

```typescript
const value: models.ContextAdherenceScorer = {
  name: "context_adherence",
  filters: [
    {
      name: "modality",
      operator: "not_in",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.ContextRelevanceScorer`

```typescript
const value: models.ContextRelevanceScorer = {
  name: "context_relevance",
  filters: [
    {
      name: "node_name",
      operator: "one_of",
      value: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      caseSensitive: true,
    },
  ],
};
```

### `models.CorrectnessScorer`

```typescript
const value: models.CorrectnessScorer = {
  name: "correctness",
  filters: [
    {
      name: "metadata",
      operator: "ne",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

### `models.GroundTruthAdherenceScorer`

```typescript
const value: models.GroundTruthAdherenceScorer = {
  name: "ground_truth_adherence",
  filters: [
    {
      name: "modality",
      operator: "not_in",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.InputPIIScorer`

```typescript
const value: models.InputPIIScorer = {
  name: "input_pii",
  filters: [
    {
      name: "modality",
      operator: "eq",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.InputSexistScorer`

```typescript
const value: models.InputSexistScorer = {
  name: "input_sexist",
  filters: null,
};
```

### `models.InputToneScorer`

```typescript
const value: models.InputToneScorer = {
  name: "input_tone",
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

### `models.InputToxicityScorer`

```typescript
const value: models.InputToxicityScorer = {
  name: "input_toxicity",
  filters: [
    {
      name: "node_name",
      operator: "one_of",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

### `models.InstructionAdherenceScorer`

```typescript
const value: models.InstructionAdherenceScorer = {
  name: "instruction_adherence",
  filters: [
    {
      name: "modality",
      operator: "eq",
      value: "ENUM_VALUE",
    },
  ],
};
```

### `models.OutputPIIScorer`

```typescript
const value: models.OutputPIIScorer = {
  name: "output_pii",
  filters: [
    {
      name: "node_name",
      operator: "contains",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

### `models.OutputSexistScorer`

```typescript
const value: models.OutputSexistScorer = {
  name: "output_sexist",
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

### `models.OutputToneScorer`

```typescript
const value: models.OutputToneScorer = {
  name: "output_tone",
  filters: [
    {
      name: "metadata",
      operator: "ne",
      key: "<key>",
      value: [],
    },
  ],
};
```

### `models.OutputToxicityScorer`

```typescript
const value: models.OutputToxicityScorer = {
  name: "output_toxicity",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [],
    },
  ],
};
```

### `models.PromptInjectionScorer`

```typescript
const value: models.PromptInjectionScorer = {
  name: "prompt_injection",
  filters: [
    {
      name: "node_name",
      operator: "eq",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

### `models.ToolErrorRateScorer`

```typescript
const value: models.ToolErrorRateScorer = {
  name: "tool_error_rate",
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

### `models.ToolSelectionQualityScorer`

```typescript
const value: models.ToolSelectionQualityScorer = {
  name: "tool_selection_quality",
  filters: null,
};
```

