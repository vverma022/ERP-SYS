"use client"
import React from "react";
import FormRenderer from "@/components/faculty/form-render";
import { useFormById } from "@/hooks/forms";
import TableFormRenderer from "@/components/formbuilder/table-rendered";

export default function KpiPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { data, isLoading, error } = useFormById(id);

  if (isLoading) {
    return <div className="text-center ">Loading...</div>;
  }


  if (error) {
    return <div>Error: {String(error)}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const kpi = data.kpi;
  const kpi_name = kpi?.kpi_name || "Untitled KPI";
  const kpi_description = kpi?.kpi_description || "No description available";
  const elements = kpi?.elements || [];

  return (
    <TableFormRenderer
      // id={}
      description={kpi_description}
      name={kpi_name}
      elements={elements}
    />
  );
}