import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherClassStudentsProps {
   classId: string;
}

async function GetTeacherClassStudentsClient({
   classId,
}: GetTeacherClassStudentsProps) {
   try {
      const response = await api.get(`/teacher/classes/${classId}/students`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as notas da turma: " + err.message);
   }
}

export function useGetTeacherClassStudents(
   classId: GetTeacherClassStudentsProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class-students", classId],
      queryFn: () => GetTeacherClassStudentsClient({ classId }),
   });
}
