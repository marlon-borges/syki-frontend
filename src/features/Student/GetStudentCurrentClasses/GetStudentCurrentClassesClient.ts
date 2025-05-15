import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentCurrentClassesClient() {
   try {
      const response = await api.get(`/student/classes/current`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as turmas atuais: " + err.message);
   }
}

export function useGetStudentCurrentClasses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-current-classes"],
      queryFn: () => GetStudentCurrentClassesClient(),
   });
}
