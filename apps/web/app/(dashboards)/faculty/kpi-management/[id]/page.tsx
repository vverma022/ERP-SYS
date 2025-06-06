"use client"
import React from "react";
import TableFormRenderer from "@/components/formbuilder/table-rendered";
import { useFetchAssignedKPIById } from "@/hooks/faculty";

export default function KpiPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { data, isLoading, error } = useFetchAssignedKPIById(id);
  console.log("KPI Data:", data);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {String(error)}</div>;
  }

  if (!data || !data.kpi) {
    return <div>No data found</div>;
  }

  const kpi = data.kpi.kpi_name || "Untitled KPI";
  const description = data.kpi.kpi_description || "No description available";
  const elements = data.kpi.elements || [];

  return (
    <TableFormRenderer
      id={id}
      description={description}
      name={kpi}
      elements={elements}
    />
  );
}