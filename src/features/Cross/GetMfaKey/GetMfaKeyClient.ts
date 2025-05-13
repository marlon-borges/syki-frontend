import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetMfaKeyProps {
   token: string;
}

export interface GetMfaKeyResponse {
   key: string;
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
   return useQuery<GetMfaKeyResponse, Error, GetMfaKeyProps>({
      queryKey: ["get-mfa-key", token],
      queryFn: () => GetMfaKeyClient({ token }),
   });
}
