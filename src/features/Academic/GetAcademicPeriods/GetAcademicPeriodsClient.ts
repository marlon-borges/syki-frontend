import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetAcademicPeriodsResponse {
   id: string | null;
   startAt: string;
   endAt: string;
}

async function GetAcademicPeriodsClient() {
   try {
      const response = await api.get("/academic/academic-periods");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os períodos acadêmicos: " + err.message);
   }
}

export function useGetAcademicPeriods() {
   return useQuery<GetAcademicPeriodsResponse[], Error, {}>({
      queryKey: ["get-academic-periods"],
      queryFn: () => GetAcademicPeriodsClient(),
   });
}
