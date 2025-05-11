import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SendResetPasswordProps {
   token: string;
   password: string;
}

async function ResetPasswordClient({
   token,
   password,
}: SendResetPasswordProps) {
   try {
      const response = await axios({
         method: "POST",
         url: `${process.env.REACT_APP_API_URL}/reset-password`,
         data: {
            token,
            password,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao enviar a redefinição de senha: " + err.message);
   }
}

export function useResetPassword(token: string, password: string) {
   return useQuery({
      queryKey: ["reset-password"],
      queryFn: () => ResetPasswordClient({ token, password }),
   });
}
