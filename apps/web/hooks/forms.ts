import { FormConfig, ProcessError } from '@/lib/types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

// Define the Axios function
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

// Custom hook
export function useSaveForm(): UseMutationResult<
  any, // Replace with the actual return type of saveFormToBackend if known
  ProcessError,
  FormConfig
> {
  return useMutation({
    mutationFn: saveFormToBackend,
    onSuccess: () => {
      toast("Form saved successfully", {
        description: "Your form has been saved to the backend",
      });
    },
    onError: (error: ProcessError) => {
      toast("Error saving form", {
        description: error.message,
      });
      console.error("Save form error:", error.name, error.cause);
    },
  });
}