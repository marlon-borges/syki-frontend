import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentAgendaClient() {
   try {
      const response = await api.get(`/student/agenda`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a agenda do aluno: " + err.message);
   }
}

export function useGetStudentAgenda() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-agenda"],
      queryFn: () => GetStudentAgendaClient(),
   });
}
