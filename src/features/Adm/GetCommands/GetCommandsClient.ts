import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

type CommandsStatus =
   | "Pending"
   | "Awaiting"
   | "Processing"
   | "Success"
   | "Error";

interface GetCommandsParams {
   institutionId?: string;
   type?: string;
   status?: CommandsStatus;
}

async function GetCommandsClient(params: GetCommandsParams) {
   try {
      const response = await api.get("/adm/commands", { params });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar todos os comandos: " + err.message);
   }
}

export function useGetCommands(params: GetCommandsParams) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-commands", params],
      queryFn: () => GetCommandsClient(params),
   });
}
