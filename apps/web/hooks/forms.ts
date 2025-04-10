import { FormConfig, ProcessError } from '@/lib/types';
import { useMutation, UseMutationResult, useQuery } from '@tanstack/react-query';
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

const fetchForms = async (): Promise<FormConfig> => {
  const response = await axios.get('/api/forms');
  return response.data;
};

export function useFetchForms() {
  return useQuery({
    queryKey: ['forms'],
    queryFn: fetchForms,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  });
}

