import { DeptConfig, PillarInstance, ProcessError } from '@/lib/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { AssignKpiPayload } from '@/lib/types';

const fetchDepts = async (): Promise<DeptConfig[]> => {
    const response = await axios.get('/api/department');
    return response.data.departments.map((dept: any) => ({
      id: dept.dept_id,
      name: dept.dept_name,
      pillars: (dept.pillars || []).map((pillar: any) => ({
        id: pillar.pillar_id,
        name: pillar.pillar_name,
})),
    }));
  };
  
  export function useFetchDepartments() {
    return useQuery<DeptConfig[]>({
      queryKey: ['depts'],
      queryFn: fetchDepts,
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false
    });
  }

  
  
  export function useAssignKpiToPillar() {
    return useMutation({
      mutationFn: async (payload: AssignKpiPayload) => {
        const response = await axios.post('/api/assigned-kpi', payload);
        return response.data;
      },
      onSuccess: () => {
        toast.success('KPIs successfully assigned!');
      },
      onError: (error: ProcessError) => {
        toast.error("Error saving form", {
          description: error.message,
        });
      }
    });
  }