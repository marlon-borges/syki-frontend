import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface LoginMfaProps {
   token: string;
}

export interface LoginMfaResponse {
   accessToken: string | null;
}

export interface LoginMfaErrorResponse extends BadRequest {}

async function LoginMfaClient({ token }: LoginMfaProps) {
   try {
      const response = await api.post("/login/mfa", {
         token,
      });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: LoginMfaErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "LoginRequestTwoFactor",
         message:
            "Utilize o segundo fator de autenticação para realizar login.",
      } satisfies LoginMfaErrorResponse;
   }
}

export function useLoginMfaMutation() {
   return useMutation<LoginMfaResponse, LoginMfaErrorResponse, LoginMfaProps>({
      mutationKey: ["login-mfa"],
      mutationFn: LoginMfaClient,
   });
}
