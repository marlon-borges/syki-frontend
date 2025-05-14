import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { useMutation } from "@tanstack/react-query";

export interface FinishRegisterProps {
   token: string;
   password: string;
}

export interface FinishRegisterResponse {
   id: string;
   name: string;
   email: string;
   password: string;
   institutionId: string;
   institution: string;
   role: string;
   online: boolean;
   connections: number;
}

export interface FinishRegisterErrorResponse extends BadRequest {}

async function FinishRegisterClient({ token, password }: FinishRegisterProps) {
   try {
      const response = await api.put("/users", {
         token,
         password,
      });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: FinishRegisterErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "WeakPassword",
         message: "Senha fraca.",
      } satisfies FinishRegisterErrorResponse;
   }
}

export function useFinishRegisterMutation() {
   return useMutation<
      FinishRegisterResponse,
      FinishRegisterErrorResponse,
      FinishRegisterProps
   >({
      mutationKey: ["finish-register"],
      mutationFn: FinishRegisterClient,
   });
}
