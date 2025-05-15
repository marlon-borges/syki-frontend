import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetTeacherInsightsClient() {
   try {
      const response = await api.get(`/teacher/insights`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os insights: " + err.message);
   }
}

export function useGetTeacherInsights() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-insights"],
      queryFn: () => GetTeacherInsightsClient(),
   });
}
