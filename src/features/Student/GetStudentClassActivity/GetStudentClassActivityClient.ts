import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetStudentClassActivityProps {
   classId: string;
   activityId: string;
}

async function GetStudentClassActivityClient({
   classId,
   activityId,
}: GetStudentClassActivityProps) {
   try {
      const response = await api.get(
         `/student/classes/${classId}/activities/${activityId}`,
      );
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar a atividade do aluno na turma: " + err.message,
      );
   }
}

export function useGetStudentClassActivity(
   classId: GetStudentClassActivityProps["classId"],
   activityId: GetStudentClassActivityProps["activityId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-class-activity", classId, activityId],
      queryFn: () => GetStudentClassActivityClient({ classId, activityId }),
   });
}
