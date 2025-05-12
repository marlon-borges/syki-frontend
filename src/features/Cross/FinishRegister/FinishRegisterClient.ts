import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface FinishRegisterProps {
   token: string;
   password: string;
}

async function FinishRegisterClient({ token, password }: FinishRegisterProps) {
   try {
      const response = await api.put("/users", {
         token,
         password,
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o registro final: " + err.message);
   }
}

export function useFinishRegisterMutation(token: string, password: string) {
   return useMutation({
      mutationKey: ["finish-register"],
      mutationFn: () => FinishRegisterClient({ token, password }),
   });
}
