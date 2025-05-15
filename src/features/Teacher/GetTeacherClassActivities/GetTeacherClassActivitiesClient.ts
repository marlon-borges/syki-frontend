import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherClassActivitiesProps {
   classId: string;
}

async function GetTeacherClassActivitiesClient({
   classId,
}: GetTeacherClassActivitiesProps) {
   try {
      const response = await api.get(`/teacher/classes/${classId}/activities/`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as atividades: " + err.message);
   }
}

export function useGetTeacherClassActivities(
   classId: GetTeacherClassActivitiesProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class-activity", classId],
      queryFn: () => GetTeacherClassActivitiesClient({ classId }),
   });
}
