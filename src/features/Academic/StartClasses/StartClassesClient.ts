import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface StartClassesProps {
   classes: string[];
}

async function StartClassesClient({ ...body }: StartClassesProps) {
   try {
      const response = await api.put("/academic/classes/start", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao iniciar as turmas: " + err.message);
   }
}

export function useStartClassesMutation() {
   return useMutation<void, Error, StartClassesProps>({
      mutationKey: ["start-classes"],
      mutationFn: StartClassesClient,
   });
}
