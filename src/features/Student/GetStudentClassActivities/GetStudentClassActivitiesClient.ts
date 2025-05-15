import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetStudentClassActivitiesProps {
   classId: string;
}

async function GetStudentClassActivitiesClient({
   classId,
}: GetStudentClassActivitiesProps) {
   try {
      const response = await api.get(`/student/classes/${classId}/activities`);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as atividades do aluno na turma: " + err.message,
      );
   }
}

export function useGetStudentClassActivities(
   classId: GetStudentClassActivitiesProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-class-activities", classId],
      queryFn: () => GetStudentClassActivitiesClient({ classId }),
   });
}
