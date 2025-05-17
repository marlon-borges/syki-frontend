import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetClassesProps {
   status?: ClassStatusType;
   allLessonsFinished?: boolean;
}

async function GetClassesClient(params: GetClassesProps) {
   try {
      const response = await api.get("/academic/classes", { params });
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as turmas da instituição: " + err.message,
      );
   }
}

export function useGetClasses(params: GetClassesProps) {
   return useQuery<void, Error, {}>({
      queryKey: ["get-classes", params],
      queryFn: () => GetClassesClient(params),
   });
}
