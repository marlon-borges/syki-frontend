import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface SendResetPasswordProps {
   email: string;
}

async function SendResetPasswordClient({ email }: SendResetPasswordProps) {
   try {
      const response = await api.post("/reset-password-token", {
         email,
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao enviar a redefinição de senha: " + err.message);
   }
}

export function useSendResetPasswordMutation(email: string) {
   return useMutation({
      mutationKey: ["send-reset-password"],
      mutationFn: () => SendResetPasswordClient({ email }),
   });
}
