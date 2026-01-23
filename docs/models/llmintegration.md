# LLMIntegration

## Example Usage

```typescript
import { LLMIntegration } from "galileo-generated/models";

let value: LLMIntegration = "openai";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"anthropic" | "aws_bedrock" | "aws_sagemaker" | "azure" | "custom" | "databricks" | "mistral" | "nvidia" | "openai" | "vegas_gateway" | "vertex_ai" | "writer" | Unrecognized<string>
```