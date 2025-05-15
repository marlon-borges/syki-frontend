import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetTeacherClassProps {
   classId: string;
}

async function GetTeacherClassClient({ classId }: GetTeacherClassProps) {
   try {
      const response = await api.get(`/teacher/classes/${classId}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a turma: " + err.message);
   }
}

export function useGetTeacherClass(classId: GetTeacherClassProps["classId"]) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class", classId],
      queryFn: () => GetTeacherClassClient({ classId }),
   });
}
