import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetCourseDisciplinesProps {
   courseId: string;
}

async function GetCourseDisciplinesClient({
   courseId,
}: GetCourseDisciplinesProps) {
   try {
      const response = await api.get(
         `/academic/courses/${courseId}/disciplines`,
      );
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as disciplinas do curso: " + err.message);
   }
}

export function useGetCourseDisciplines(
   courseId: GetCourseDisciplinesProps["courseId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-course-disciplines", courseId],
      queryFn: () => GetCourseDisciplinesClient({ courseId }),
   });
}
