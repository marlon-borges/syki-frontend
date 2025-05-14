import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

interface DisciplinesProps {
   id: string;
   period: string;
   credits: number;
   workload: number;
}

export interface CreateCourseCurriculumProps {
   name: string;
   courseId: string;
   disciplines: DisciplinesProps[];
}

async function CreateCourseCurriculumClient({
   ...body
}: CreateCourseCurriculumProps) {
   try {
      const response = await api.post("/academic/course-curriculums", body);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao criar uma nova grade curricular: " + err.message,
      );
   }
}

export function useCreateCourseCurriculumMutation() {
   return useMutation<void, Error, CreateCourseCurriculumProps>({
      mutationKey: ["create-course-curriculum"],
      mutationFn: CreateCourseCurriculumClient,
   });
}
