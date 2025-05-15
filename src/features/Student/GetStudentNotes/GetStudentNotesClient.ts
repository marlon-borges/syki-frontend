import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentNotesClient() {
   try {
      const response = await api.get(`/student/notes`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as notas: " + err.message);
   }
}

export function useGetStudentNotes() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-notes"],
      queryFn: () => GetStudentNotesClient(),
   });
}
