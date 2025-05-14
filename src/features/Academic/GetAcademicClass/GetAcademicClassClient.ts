import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetAcademicClassProps {
   classId: string;
}

async function GetAcademicClassClient({ classId }: GetAcademicClassProps) {
   try {
      const response = await api.get(`/academic/classes/${classId}`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a turma: " + err.message);
   }
}

export function useGetAcademicClass(classId: GetAcademicClassProps["classId"]) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-academic-class", classId],
      queryFn: () => GetAcademicClassClient({ classId }),
   });
}
