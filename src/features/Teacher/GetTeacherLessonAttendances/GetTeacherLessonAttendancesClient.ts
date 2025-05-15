import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherLessonAttendancesProps {
   id: string;
}

async function GetTeacherLessonAttendancesClient({
   id,
}: GetTeacherLessonAttendancesProps) {
   try {
      const response = await api.get(`/teacher/lessons/${id}/attendances`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a frequência da aula: " + err.message);
   }
}

export function useGetTeacherLessonAttendances(
   id: GetTeacherLessonAttendancesProps["id"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-lesson-attendances", id],
      queryFn: () => GetTeacherLessonAttendancesClient({ id }),
   });
}
