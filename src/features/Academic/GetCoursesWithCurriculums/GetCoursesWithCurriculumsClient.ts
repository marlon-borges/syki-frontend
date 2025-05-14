import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCoursesWithCurriculumsClient() {
   try {
      const response = await api.get("/academic/courses/with-curriculums");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar os cursos com grades curriculares vinculadas: " +
            err.message,
      );
   }
}

export function useGetCoursesWithCurriculums() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-courses-with-curriculums"],
      queryFn: () => GetCoursesWithCurriculumsClient(),
   });
}
