import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SendResetPasswordProps {
   email: string;
}

async function SendResetPasswordClient({ email }: SendResetPasswordProps) {
   try {
      const response = await axios({
         method: "POST",
         url: `${process.env.REACT_APP_API_URL}/reset-password-token`,
         data: {
            email,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao enviar a redefinição de senha: " + err.message);
   }
}

export function useSendResetPassword(email: string) {
   return useQuery({
      queryKey: ["send-reset-password"],
      queryFn: () => SendResetPasswordClient({ email }),
   });
}
