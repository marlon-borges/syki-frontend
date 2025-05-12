import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface PendingRegisterProps {
   email: string;
}

async function PendingRegisterClient({ email }: PendingRegisterProps) {
   try {
      const response = await api.post("/users", { email });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o registro: " + err.message);
   }
}

export function usePendingRegisterMutation(email: string) {
   return useMutation({
      mutationKey: ["pending-register"],
      mutationFn: () => PendingRegisterClient({ email }),
   });
}
