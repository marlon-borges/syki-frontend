import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface LoginMfaProps {
   code: string;
}

export interface LoginMfaResponse {
   token: string;
}

async function LoginMfaClient({ code }: LoginMfaProps) {
   try {
      const response = await axios({
         method: "POST",
         headers: { "Content-Type": "application/json" },
         url: `${process.env.REACT_APP_API_URL}/login/mfa`,
         data: {
            token: code,
         },
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
