import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateCourseOfferingProps {
   campusId: string;
   courseId: string;
   courseCurriculumId: string;
   period: string | null;
   shift: "Matutino" | "Vespertino" | "Noturno";
}

async function CreateCourseOfferingClient({
   ...body
}: CreateCourseOfferingProps) {
   try {
      const response = await api.post("/academic/course-offerings", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar uma nova oferta de curso: " + err.message);
   }
}

export function useCreateCourseOfferingMutation() {
   return useMutation<void, Error, CreateCourseOfferingProps>({
      mutationKey: ["create-course-offering"],
      mutationFn: CreateCourseOfferingClient,
   });
}
