import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetMfaKeyResponse {
   key: string;
}

async function GetMfaKeyClient() {
   try {
      const response = await api.get("/mfa/key");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a chave MFA: " + err.message);
   }
}

export function useGetMfaKey() {
   return useQuery<GetMfaKeyResponse, Error, {}>({
      queryKey: ["get-mfa-key"],
      queryFn: () => GetMfaKeyClient(),
   });
}
