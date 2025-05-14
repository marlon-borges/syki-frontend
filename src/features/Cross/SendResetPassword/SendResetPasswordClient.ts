import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { useMutation } from "@tanstack/react-query";

export interface SendResetPasswordProps {
   email: string | null;
}

export interface SendResetPasswordErrorResponse extends BadRequest {}

async function SendResetPasswordClient({ email }: SendResetPasswordProps) {
   try {
      const response = await api.post("/reset-password-token", {
         email,
      });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         throw err.response.data as SendResetPasswordErrorResponse;
      }
      throw {
         code: "UserNotFound",
         message: "Usuário não encontrado.",
      } satisfies SendResetPasswordErrorResponse;
   }
}

export function useSendResetPasswordMutation() {
   return useMutation<
      void,
      SendResetPasswordErrorResponse,
      SendResetPasswordProps
   >({
      mutationKey: ["send-reset-password"],
      mutationFn: SendResetPasswordClient,
   });
}
