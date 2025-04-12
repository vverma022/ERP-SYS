import { FormConfig, ProcessError } from '@/lib/types';
import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const saveFormToBackend = async (formData: FormConfig): Promise<any> => {
    try {
      const response = await axios.post('/api/forms', formData);
      return response.data;
    } catch (error: any) {
      throw new ProcessError({
        name: 'PROCESSING_ERROR',
        message: error.response?.data?.error || 'Failed to save form',
        cause: error,
      });
    }
  };

export function useSaveForm(): UseMutationResult<
  any, 
  ProcessError,
  FormConfig
> {
  return useMutation({
    mutationFn: saveFormToBackend,
    onSuccess: () => {
      toast.success("Form saved successfully", {
        description: "Your form has been saved to the backend",
      });
    },
    onError: (error: ProcessError) => {
      toast.error("Error saving form", {
        description: error.message,
      });
      console.error("Save form error:", error.name, error.cause);
    },
  });
}

const fetchForms = async (): Promise<FormConfig[]> => {
  const response = await axios.get('/api/forms');
  return response.data.kpis;
};

export function useFetchForms() {
  return useQuery<FormConfig[]>({
    queryKey: ['forms'],
    queryFn: fetchForms,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  });
}

export function useDeleteKpi() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (kpiId: string) => {
      const response = await axios.delete(`/api/kpi/${kpiId}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("KPI deleted successfully", {
        description: "The KPI has been deleted from the backend",
      });
      // Fix the invalidation syntax
      queryClient.invalidateQueries({ queryKey: ['kpi'] });
    },
    onError: (error: ProcessError) => {
      toast.error("Error deleting KPI", {
        description: error.message,
      });
      console.error('Error deleting KPI:', error);
    },
  });
}

const fetchFormById = async (id : string) => {
  const { data } = await axios.get(`/api/kpi/${id}`); // Replace with your API endpoint
  return data;
};


export const useFormById = (id : string) => {
  return useQuery({
    queryKey: ['form', id], 
    queryFn: () => fetchFormById(id!), 
    enabled: !!id, 
  });
};

