import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateDisciplineProps {
   name: string | null;
   city: string[];
}

async function CreateDisciplineClient({ ...body }: CreateDisciplineProps) {
   try {
      const response = await api.post("/academic/disciplines", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar uma nova disciplina: " + err.message);
   }
}

export function useCreateDisciplineMutation() {
   return useMutation<void, Error, CreateDisciplineProps>({
      mutationKey: ["create-discipline"],
      mutationFn: CreateDisciplineClient,
   });
}
