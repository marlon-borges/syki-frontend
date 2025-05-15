import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentDisciplinesClient() {
   try {
      const response = await api.get(`/student/disciplines`);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as disciplinas da grade curricular: " + err.message,
      );
   }
}

export function useGetStudentDisciplines() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-disciplines"],
      queryFn: () => GetStudentDisciplinesClient(),
   });
}
