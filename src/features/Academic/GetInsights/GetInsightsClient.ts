import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetInsightsClient() {
   try {
      const response = await api.get("/academic/insights");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar os insights do acadêmico: " + err.message,
      );
   }
}

export function useGetInsights() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-academic-insights"],
      queryFn: () => GetInsightsClient(),
   });
}
