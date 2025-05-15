import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentFrequenciesClient() {
   try {
      const response = await api.get(`/student/frequencies`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as frequências: " + err.message);
   }
}

export function useGetStudentFrequencies() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-frequencies"],
      queryFn: () => GetStudentFrequenciesClient(),
   });
}
