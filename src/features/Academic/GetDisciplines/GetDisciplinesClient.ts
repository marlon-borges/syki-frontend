import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetDisciplinesProps {
   courseId?: string;
}

async function GetDisciplinesClient(params: GetDisciplinesProps) {
   try {
      const response = await api.get("/academic/disciplines", { params });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as disciplinas: " + err.message);
   }
}

export function useGetDisciplines(params: GetDisciplinesProps) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-disciplines", params],
      queryFn: () => GetDisciplinesClient(params),
   });
}
