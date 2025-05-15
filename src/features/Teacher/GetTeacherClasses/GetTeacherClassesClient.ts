import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetTeacherClassesClient() {
   try {
      const response = await api.get(`/teacher/classes`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as turmas: " + err.message);
   }
}

export function useGetTeacherClasses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-classes"],
      queryFn: () => GetTeacherClassesClient(),
   });
}
