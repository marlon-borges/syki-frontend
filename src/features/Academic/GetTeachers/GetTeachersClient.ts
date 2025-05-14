import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetTeachersClient() {
   try {
      const response = await api.get("/academic/teachers");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os professores: " + err.message);
   }
}

export function useGetTeachers() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-teachers"],
      queryFn: () => GetTeachersClient(),
   });
}
