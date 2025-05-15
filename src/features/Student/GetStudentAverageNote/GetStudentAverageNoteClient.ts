import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentAverageNoteClient() {
   try {
      const response = await api.get(`/student/average-note`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a nota média: " + err.message);
   }
}

export function useGetStudentAverageNote() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-average-note"],
      queryFn: () => GetStudentAverageNoteClient(),
   });
}
