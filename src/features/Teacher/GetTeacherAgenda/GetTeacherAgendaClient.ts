import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetTeacherAgendaClient() {
   try {
      const response = await api.get(`/teacher/agenda`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a agenda: " + err.message);
   }
}

export function useGetTeacherAgenda() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-agenda"],
      queryFn: () => GetTeacherAgendaClient(),
   });
}
