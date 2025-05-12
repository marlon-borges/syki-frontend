import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface LoginMfaProps {
   code: string;
}

export interface LoginMfaResponse {
   token: string;
}

async function LoginMfaClient({ code }: LoginMfaProps) {
   try {
      const response = await api.post("/login/mfa", {
         token: code,
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o login MFA: " + err.message);
   }
}

export function useLoginMfaQuery(code: string) {
   return useQuery<LoginMfaResponse, Error>({
      queryKey: ["login-mfa"],
      queryFn: () => LoginMfaClient({ code }),
   });
}
