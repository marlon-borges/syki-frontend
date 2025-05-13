import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface LoginProps {
   email: string;
   password: string;
}

export interface LoginResponse {
   accessToken: string;
}

export interface LoginErrorResponse extends BadRequest {}

async function LoginClient({ email, password }: LoginProps) {
   try {
      const response = await api.post("/login", {
         email,
         password,
      });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: LoginErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "UserNotFound",
         message: "Usuário não encontrado.",
      } satisfies LoginErrorResponse;
   }
}

export function useLoginMutation() {
   return useMutation<LoginResponse, LoginErrorResponse, LoginProps>({
      mutationKey: ["login"],
      mutationFn: LoginClient,
   });
}
