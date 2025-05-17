import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

type BatchesStatus = "Pending" | "Processing" | "Success" | "Error";

interface GetBatchesParams {
   institutionId?: string;
   type?: string;
   status?: BatchesStatus;
}

async function GetBatchesClient(params: GetBatchesParams) {
   try {
      const response = await api.get("/adm/batches", { params });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar todos os lotes: " + err.message);
   }
}

export function useGetBatches(params: GetBatchesParams) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-batches", params],
      queryFn: () => GetBatchesClient(params),
   });
}
