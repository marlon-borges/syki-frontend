import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCoursesWithDisciplinesClient() {
   try {
      const response = await api.get("/academic/courses/with-disciplines");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar os cursos com disciplinas vinculadas: " + err.message,
      );
   }
}

export function useGetCoursesWithDisciplines() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-courses-with-disciplines"],
      queryFn: () => GetCoursesWithDisciplinesClient(),
   });
}
