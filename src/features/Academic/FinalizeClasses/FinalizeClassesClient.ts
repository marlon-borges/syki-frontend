import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface FinalizeClassesProps {
   classes: string[];
}

async function FinalizeClassesClient({ ...body }: FinalizeClassesProps) {
   try {
      const response = await api.put("/academic/classes/finalize", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao finalizar as turmas: " + err.message);
   }
}

export function useFinalizeClassesMutation() {
   return useMutation<void, Error, FinalizeClassesProps>({
      mutationKey: ["finalize-classes"],
      mutationFn: FinalizeClassesClient,
   });
}
