import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetStudentsClient() {
   try {
      const response = await api.get("/academic/students");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os estudantes: " + err.message);
   }
}

export function useGetStudents() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-students"],
      queryFn: () => GetStudentsClient(),
   });
}
