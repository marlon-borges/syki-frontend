import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateCourseProps {
   name: string | null;
   type:
      | "Bacharelado"
      | "Licenciatura"
      | "Tecnologo"
      | "Especializacao"
      | "Mestrado"
      | "Doutorado"
      | "PosDoutorado";
   disciplines: string[] | null;
}

async function CreateCourseClient({ ...body }: CreateCourseProps) {
   try {
      const response = await api.post("/academic/courses", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar um novo curso: " + err.message);
   }
}

export function useCreateCourseMutation() {
   return useMutation<void, Error, CreateCourseProps>({
      mutationKey: ["create-course"],
      mutationFn: CreateCourseClient,
   });
}
