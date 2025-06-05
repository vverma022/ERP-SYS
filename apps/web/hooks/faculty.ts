import { useQuery , useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import { AssignedKPI } from '@/lib/types';
import { toast } from 'sonner';
import { ProcessError } from '@/lib/types';
import { KpiFormData } from '@/lib/types';



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
    return {kpiName, elements};
  };
  
  export const useFetchKPIById = (id: number) => {
    return useQuery({
      queryKey: ['kpi', id], 
      queryFn: () => fetchKPIById(id), 
      enabled: !!id, 
    })
  };

  const fetchAssignedKPIById = async (id: string) => {
    const { data } = await axios.get(`/api/kpi/${id}`);
    return data;
  }

  export const useFetchAssignedKPIById = (id: string) => {
    return useQuery({
      queryKey: ['assigned-kpi', id], 
      queryFn: () => fetchAssignedKPIById(id), 
      enabled: !!id, 
    })
  };

  export const saveDataToBackend = async (formData: KpiFormData): Promise<any> => {
    try {
      const response = await axios.put(`/api/assigned-kpi/${formData.id}`, {
        form_input: formData.formData.entries,
      });
      return response.data;
    } catch (error: any) {
      throw new ProcessError({
        name: 'PROCESSING_ERROR',
        message: error.response?.data?.error || 'Failed to save data',
        cause: error,
      });
    }
  };

  export function useSaveKpiData(): UseMutationResult<any, ProcessError, KpiFormData> {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (formData: KpiFormData) => {
        return saveDataToBackend(formData);
      },
      onSuccess: () => {
          toast.success('KPI data saved successfully', {
            description: 'Your KPI data has been updated successfully.',
          });
          queryClient.invalidateQueries({ queryKey: ['kpiData'] }); // Adjust the queryKey as necessary
        },
        onError: (error: ProcessError) => {
          toast.error('Error saving KPI data', {
            description: error.message,
          });
          console.error('Save KPI data error:', error.name, error.cause);
        },
      }
    );
  }

  type KpiData = {
    assigned_kpi_id: number;
    kpi_name: string;
    kpi_description: string;
    kpi_status: string;
    form_input: Record<string, string | number>[] | null;
  };
  
  

  const fetchAssignedKPIByDepartmentId = async (departmentId : string) => {
    const { data } = await axios.get(`/api/assigned-kpi`, {
      params: { department_id: departmentId },
    });
    return data;
  };
  
  export const useFetchKPISubmisson = (departmentId : string) => {
    return useQuery({
      queryKey: ['assigned-kpi', departmentId], // Include departmentId in the query key
      queryFn: () => fetchAssignedKPIByDepartmentId(departmentId),
      enabled: !!departmentId, // Only enable the query if departmentId is provided
    });
  };