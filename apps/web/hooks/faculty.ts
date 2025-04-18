import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AssignedKPI } from '@/lib/types';



const fetchAssignedKPIs = async (): Promise<AssignedKPI[]> => {
  const response = await axios.get('/api/assigned-kpi');
  return response.data.assignedKpis.map((kpi: any) => ({
    assigned_kpi_id: kpi.assigned_kpi_id,
    kpi_name: kpi.kpi_name,
    kpi_status: kpi.kpi_status,
    comments: kpi.comments,
    kpi_id: kpi.original_kpi_id, 
    elements: kpi.elements,
  }));
};
  export function useFetchAssignedKPI() {
    return useQuery<AssignedKPI[]>({
      queryKey: ['assigned-kpis'],
      queryFn: fetchAssignedKPIs,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false
    });
  }

  const fetchKPIById = async (id: number) => {
    const { data } = await axios.get(`/api/assigned-kpi/${id}`);
   
    const kpiName = data.assignedKpi.kpi_name;
    const elements = data.assignedKpi.elements;
    console.log("KPI DATA BY ID", data) // Replace with your API endpoint
    return {kpiName, elements};
  };
  
  export const useFetchKPIById = (id: number) => {
    return useQuery({
      queryKey: ['kpi', id], 
      queryFn: () => fetchKPIById(id), 
      enabled: !!id, 
    })
  };

  