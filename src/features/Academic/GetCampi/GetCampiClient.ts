import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCampiClient() {
   try {
      const response = await api.get("/academic/campi");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os campus: " + err.message);
   }
}

export function useGetCampi() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-campi"],
      queryFn: () => GetCampiClient(),
   });
}
