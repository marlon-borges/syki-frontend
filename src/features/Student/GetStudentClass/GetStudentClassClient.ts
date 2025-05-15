import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetStudentClassProps {
   classId: string;
}

async function GetStudentClassClient({ classId }: GetStudentClassProps) {
   try {
      const response = await api.get(`/student/classes/${classId}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a turma do aluno: " + err.message);
   }
}

export function useGetStudentClass(classId: GetStudentClassProps["classId"]) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-class", classId],
      queryFn: () => GetStudentClassClient({ classId }),
   });
}
