import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetCommandClientProps {
   id: string;
}

async function GetCommandClient({ id }: GetCommandClientProps) {
   try {
      const response = await api.get(`/adm/commands/${id}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar o comando: " + err.message);
   }
}

export function useGetCommand(id: GetCommandClientProps) {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-command", id],
      queryFn: () => GetCommandClient(id),
   });
}
