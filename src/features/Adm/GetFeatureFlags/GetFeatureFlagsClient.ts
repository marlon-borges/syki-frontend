import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetFeatureFlagsClient() {
   try {
      const response = await api.get("/adm/feature-flags");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar os feature flags: " + err.message);
   }
}

export function useGetFeatureFlags() {
   return useQuery<void, Error, {}>({
      queryKey: ["adm-get-feature-flags"],
      queryFn: () => GetFeatureFlagsClient(),
   });
}
