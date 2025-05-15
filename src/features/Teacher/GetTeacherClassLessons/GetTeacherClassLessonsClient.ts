import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherClassLessonsProps {
   classId: string;
}

async function GetTeacherClassLessonsClient({
   classId,
}: GetTeacherClassLessonsProps) {
   try {
      const response = await api.get(`/teacher/classes/${classId}/lessons`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as aulas da turma: " + err.message);
   }
}

export function useGetTeacherClassLessons(
   classId: GetTeacherClassLessonsProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class-lessons", classId],
      queryFn: () => GetTeacherClassLessonsClient({ classId }),
   });
}
