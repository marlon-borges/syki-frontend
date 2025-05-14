import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetEnrollmentPeriodsProps() {
   try {
      const response = await api.get("/academic/enrollment-periods");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os perídos de matrícula: " + err.message);
   }
}

export function useGetEnrollmentPeriods() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-enrollment-periods"],
      queryFn: () => GetEnrollmentPeriodsProps(),
   });
}
