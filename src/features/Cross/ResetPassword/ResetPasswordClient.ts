import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface SendResetPasswordProps {
   token: string;
   password: string;
}

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
      throw new Error("Erro ao enviar a redefinição de senha: " + err.message);
   }
}

export function useResetPasswordMutation(token: string, password: string) {
   return useMutation({
      mutationKey: ["reset-password"],
      mutationFn: () => ResetPasswordClient({ token, password }),
   });
}
