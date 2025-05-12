import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

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

export function useLoginMfaMutation(code: string) {
   return useMutation<LoginMfaResponse, Error>({
      mutationKey: ["login-mfa"],
      mutationFn: () => LoginMfaClient({ code }),
   });
}
