import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface ReprocessCommandProps {
   id: string;
}

async function ReprocessCommandClient({ id }: ReprocessCommandProps) {
   try {
      const response = await api.post(`/adm/commands/${id}/reprocess`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao reprocessar o comando: " + err.message);
   }
}

export function useReprocessCommandMutation(id: string) {
   return useMutation<void, Error, ReprocessCommandProps>({
      mutationKey: ["adm-reprocess-command", id],
      mutationFn: () => ReprocessCommandClient({ id }),
   });
}
