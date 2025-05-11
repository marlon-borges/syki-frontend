import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface GetMfaKeyProps {
   token: string;
}

async function GetMfaKeyClient({ token }: GetMfaKeyProps) {
   try {
      const response = await axios({
         method: "GET",
         headers: {
            Authorization: `Bearer ${token}`,
         },
         url: `${process.env.REACT_APP_API_URL}/mfa/key`,
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
