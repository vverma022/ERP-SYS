import { DeptConfig } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDepts = async (): Promise<DeptConfig[]> => {
    const response = await axios.get('/api/department');
    return response.data.departments.map((dept: any) => ({
        id: dept.dept_id,
        name: dept.dept_name,
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