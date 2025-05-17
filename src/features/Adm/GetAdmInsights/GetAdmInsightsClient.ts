import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetAdmInsightsClient() {
   try {
      const response = await api.get("/adm/insights");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os insights de adm: " + err.message);
   }
}

export function useGetAdmInsights() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-insights"],
      queryFn: () => GetAdmInsightsClient(),
   });
}
