import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetDomainEventsSummaryClient() {
   try {
      const response = await api.get("/adm/domain-events/summary");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os eventos de domínio: " + err.message);
   }
}

export function useGetDomainEventsSummary() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-domain-events-summary"],
      queryFn: () => GetDomainEventsSummaryClient(),
   });
}
