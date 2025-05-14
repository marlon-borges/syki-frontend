import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateTeacherProps {
   name: string | null;
   email: string | null;
}

async function CreateTeacherClient({ ...body }: CreateTeacherProps) {
   try {
      const response = await api.post("/academic/teachers", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar um novo professor: " + err.message);
   }
}

export function useCreateTeacherMutation() {
   return useMutation<void, Error, CreateTeacherProps>({
      mutationKey: ["create-teacher"],
      mutationFn: CreateTeacherClient,
   });
}
