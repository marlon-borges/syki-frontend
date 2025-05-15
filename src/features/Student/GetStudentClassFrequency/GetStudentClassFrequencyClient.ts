import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetStudentClassFrequencyProps {
   classId: string;
}

async function GetStudentClassFrequencyClient({
   classId,
}: GetStudentClassFrequencyProps) {
   try {
      const response = await api.get(`/student/classes/${classId}/frequency`);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar a frequência do aluno na turma: " + err.message,
      );
   }
}

export function useGetStudentClassFrequency(
   classId: GetStudentClassFrequencyProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-class-frequency", classId],
      queryFn: () => GetStudentClassFrequencyClient({ classId }),
   });
}
