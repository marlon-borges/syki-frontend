import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface GetClassNotesRemainingWeightsProps {
   classId: string;
}

async function GetClassNotesRemainingWeightsClient({
   classId,
}: GetClassNotesRemainingWeightsProps) {
   try {
      const response = await api.get(
         `/teacher/classes/${classId}/remaining-weights`,
      );
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a turma: " + err.message);
   }
}

export function useGetClassNotesRemainingWeights(
   classId: GetClassNotesRemainingWeightsProps["classId"],
) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teacher-class-notes-remaining-weights", classId],
      queryFn: () => GetClassNotesRemainingWeightsClient({ classId }),
   });
}
