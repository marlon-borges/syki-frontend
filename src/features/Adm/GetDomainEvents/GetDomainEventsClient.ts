import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

type DomainEventStatus = "Pending" | "Processing" | "Success" | "Error";
type CommandStatus =
   | "Pending"
   | "Awaiting"
   | "Processing"
   | "Success"
   | "Error";

interface GetDomainEventsParams {
   institutionId?: string;
   type?: string;
   status?: DomainEventStatus;
   commands?: CommandStatus;
}

async function GetDomainEventsSummaryClient(params: GetDomainEventsParams) {
   try {
      const response = await api.get("/adm/domain-events", { params });
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar todos os eventos de domínio: " + err.message,
      );
   }
}

export function useGetDomainEventsSummary(params: GetDomainEventsParams) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-domain-events", params],
      queryFn: () => GetDomainEventsSummaryClient(params),
   });
}
