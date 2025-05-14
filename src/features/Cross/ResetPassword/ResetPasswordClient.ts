import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { useMutation } from "@tanstack/react-query";

export interface SendResetPasswordProps {
   token: string | null;
   password: string | null;
}

export interface SendResetPasswordErrorResponse extends BadRequest {}

async function ResetPasswordClient({
   token,
   password,
}: SendResetPasswordProps) {
   try {
      const response = await api.post("/reset-password", {
         token,
         password,
      });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: SendResetPasswordErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "UserNotFound",
         message: "Usuário não encontrado.",
      } satisfies SendResetPasswordErrorResponse;
   }
}

export function useResetPasswordMutation() {
   return useMutation<
      void,
      SendResetPasswordErrorResponse,
      SendResetPasswordProps
   >({
      mutationKey: ["reset-password"],
      mutationFn: ResetPasswordClient,
   });
}
