import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCommandsSummaryClient() {
   try {
      const response = await api.get("/adm/commands/summary");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar os dados consolidados sobre os comandos: " +
            err.message,
      );
   }
}

export function useGetCommandsSummary() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-commands-summary"],
      queryFn: () => GetCommandsSummaryClient(),
   });
}
