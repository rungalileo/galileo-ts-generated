# ExperimentsAvailableColumnsResponse

## Example Usage

```typescript
import { ExperimentsAvailableColumnsResponse } from "galileo-generated/models";

let value: ExperimentsAvailableColumnsResponse = {
  columns: [
    {
      id: "id",
      label: "ID",
      category: "standard",
      description: "Galileo ID of the experiment",
      groupLabel: "Standard",
      dataType: "uuid",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
    {
      id: "created_at",
      label: "Created",
      category: "standard",
      description: "Timestamp of the experiment's creation",
      groupLabel: "Standard",
      dataType: "timestamp",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
    {
      id: "updated_at",
      label: "Last Updated",
      category: "standard",
      description: "Timestamp of the trace or span's last update",
      groupLabel: "Standard",
      dataType: "timestamp",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "name",
      label: "Name",
      category: "standard",
      description: "Name of the experiment",
      groupLabel: "Standard",
      dataType: "text",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
    {
      id: "project_id",
      label: "Project ID",
      category: "standard",
      description: "Galileo ID of the project associated with this experiment",
      groupLabel: "Standard",
      dataType: "uuid",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
    {
      id: "ranking_score",
      label: "Ranking Score",
      category: "standard",
      groupLabel: "Standard",
      dataType: "floating_point",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "playground_id",
      label: "Playground Id",
      category: "standard",
      groupLabel: "Standard",
      dataType: "uuid",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "experiment_group_id",
      label: "Experiment Group Id",
      category: "standard",
      groupLabel: "Standard",
      dataType: "uuid",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "experiment_group_name",
      label: "Experiment Group Name",
      category: "standard",
      groupLabel: "Standard",
      dataType: "text",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "experiment_group_is_system",
      label: "Experiment Group Is System",
      category: "standard",
      groupLabel: "Standard",
      dataType: "boolean",
      sortable: true,
      filterable: true,
      applicableTypes: [],
      isOptional: true,
    },
    {
      id: "metrics/average_cost",
      label: "Average Cost",
      category: "metric",
      dataType: "floating_point",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
    {
      id: "metrics/total_responses",
      label: "Total Responses",
      category: "metric",
      dataType: "integer",
      sortable: true,
      filterable: true,
      applicableTypes: [],
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `columns`                                      | [models.ColumnInfo](../models/columninfo.md)[] | :heavy_minus_sign:                             | N/A                                            |