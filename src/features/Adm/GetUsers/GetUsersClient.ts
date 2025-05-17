import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetUsersClient() {
   try {
      const response = await api.get("/adm/users");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os usuários: " + err.message);
   }
}

export function useGetUsers() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-users"],
      queryFn: () => GetUsersClient(),
   });
}
