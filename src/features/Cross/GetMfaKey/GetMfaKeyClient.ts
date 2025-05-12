import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetMfaKeyProps {
   token: string;
}

async function GetMfaKeyClient({ token }: GetMfaKeyProps) {
   try {
      const response = await api.get("/mfa/key", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar a chave MFA: " + err.message);
   }
}

export function useGetMfaKey(token: string) {
   return useQuery({
      queryKey: ["get-mfa-key"],
      queryFn: () => GetMfaKeyClient({ token }),
   });
}
