import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentInsightsClient() {
   try {
      const response = await api.get(`/student/notes`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os insights: " + err.message);
   }
}

export function useGetStudentInsights() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-insights"],
      queryFn: () => GetStudentInsightsClient(),
   });
}
