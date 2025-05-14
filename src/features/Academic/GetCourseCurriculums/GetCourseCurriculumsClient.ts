import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCourseCurriculumsOfferings() {
   try {
      const response = await api.get("/academic/course-curriculums");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as grades curriculares: " + err.message);
   }
}

export function useGetCourseCurriculums() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-course-curriculums"],
      queryFn: () => GetCourseCurriculumsOfferings(),
   });
}
