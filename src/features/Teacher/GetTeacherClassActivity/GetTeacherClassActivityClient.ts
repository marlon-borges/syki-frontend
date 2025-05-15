import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherClassActivityProps {
   classId: string;
   activityId: string;
}

async function GetTeacherClassActivityClient({
   classId,
   activityId,
}: GetTeacherClassActivityProps) {
   try {
      const response = await api.get(
         `/teacher/classes/${classId}/activities/${activityId}`,
      );
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a atividade: " + err.message);
   }
}

export function useGetTeacherClassActivity(
   classId: GetTeacherClassActivityProps["classId"],
   activityId: GetTeacherClassActivityProps["activityId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class-activity", classId, activityId],
      queryFn: () => GetTeacherClassActivityClient({ classId, activityId }),
   });
}
