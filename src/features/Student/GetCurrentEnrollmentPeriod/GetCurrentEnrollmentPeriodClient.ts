import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCurrentEnrollmentPeriodClient() {
   try {
      const response = await api.get(`/student/enrollment-periods/current`);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar periódos de matrícula atual: " + err.message,
      );
   }
}

export function useGetCurrentEnrollmentPeriod() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-enrollment-period"],
      queryFn: () => GetCurrentEnrollmentPeriodClient(),
   });
}
