import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetTeacherCurrentClassesClient() {
   try {
      const response = await api.get(`/teacher/classes/current`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as turmas atuais: " + err.message);
   }
}

export function useGetTeacherCurrentClasses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-current-classes"],
      queryFn: () => GetTeacherCurrentClassesClient(),
   });
}
