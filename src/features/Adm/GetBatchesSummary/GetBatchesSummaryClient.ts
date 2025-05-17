import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetBatchesSummaryClient() {
   try {
      const response = await api.get("/adm/batches/summary");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar os dados consolidados sobre os lotes: " + err.message,
      );
   }
}

export function useGetBatchesSummary() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-batches-summary"],
      queryFn: () => GetBatchesSummaryClient(),
   });
}
