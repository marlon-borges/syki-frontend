import { api } from "@/services/api";
// import { ClassStatusType } from "@/types/ClassStatusType";
import { useQuery } from "@tanstack/react-query";

// export interface GetClassesProps {
//    status: typeof ClassStatusType;
//    allLessonsFinished: boolean;
// }

async function GetClassesClient() {
   try {
      const response = await api.get("/academic/classes");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as turmas da instituição: " + err.message,
      );
   }
}

export function useGetClasses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-classes"],
      queryFn: () => GetClassesClient(),
   });
}
