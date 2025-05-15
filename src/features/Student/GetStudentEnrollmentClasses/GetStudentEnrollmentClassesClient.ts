import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentEnrollmentClassesClient() {
   try {
      const response = await api.get(`/student/enrollment-classes`);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as turmas: " + err.message);
   }
}

export function useGetStudentEnrollmentClasses() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-student-enrollment-classes"],
      queryFn: () => GetStudentEnrollmentClassesClient(),
   });
}
