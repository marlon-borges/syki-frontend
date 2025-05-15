import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentFrequencyClient() {
   try {
      const response = await api.get(`/student/frequency`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a frequência total: " + err.message);
   }
}

export function useGetStudentFrequency() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-frequency"],
      queryFn: () => GetStudentFrequencyClient(),
   });
}
