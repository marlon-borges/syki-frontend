import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

// Informado na documentação da API, mas não usado
// export interface GetDisciplinesProps {
//    courseId?: string;
// }

async function GetDisciplinesClient() {
   try {
      const response = await api.get("/academic/disciplines");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as disciplinas: " + err.message);
   }
}

export function useGetDisciplines() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-disciplines"],
      queryFn: () => GetDisciplinesClient(),
   });
}
