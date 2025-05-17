import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetDomainEventClientProps {
   id: string;
}

async function GetDomainEventClient({ id }: GetDomainEventClientProps) {
   try {
      const response = await api.get(`/adm/domain-events/${id}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar o evento de domínio: " + err.message);
   }
}

export function useGetDomainEvent(id: GetDomainEventClientProps) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-domain-event", id],
      queryFn: () => GetDomainEventClient(id),
   });
}
