import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetInstitutionsClient() {
   try {
      const response = await api.get("/adm/institutions");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as instituições: " + err.message);
   }
}

export function useGetInstitutions() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-institutions"],
      queryFn: () => GetInstitutionsClient(),
   });
}
