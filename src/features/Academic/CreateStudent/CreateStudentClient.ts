import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateStudentProps {
   name: string | null;
   email: string | null;
   courseOfferingId: string;
   phoneNumber: string | null;
}

async function CreateStudentClient({ ...body }: CreateStudentProps) {
   try {
      const response = await api.post("/academic/students", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar um novo estudante: " + err.message);
   }
}

export function useCreateStudentMutation() {
   return useMutation<void, Error, CreateStudentProps>({
      mutationKey: ["create-student"],
      mutationFn: CreateStudentClient,
   });
}
