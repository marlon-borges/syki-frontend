import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetBatchClientProps {
   id: string;
}

async function GetBatchClient({ id }: GetBatchClientProps) {
   try {
      const response = await api.get(`/adm/batches/${id}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar o lote: " + err.message);
   }
}

export function useGetBatch(id: GetBatchClientProps) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-batch", id],
      queryFn: () => GetBatchClient(id),
   });
}
