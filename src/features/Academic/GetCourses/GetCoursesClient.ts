import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCoursesClient() {
   try {
      const response = await api.get("/academic/courses");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os cursos: " + err.message);
   }
}

export function useGetCourses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-courses"],
      queryFn: () => GetCoursesClient(),
   });
}
