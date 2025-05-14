import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CrossLoginProps {
   targetUserId: string;
}

async function CrossLoginClient({ ...body }: CrossLoginProps) {
   try {
      const response = await api.post("/academic/cross-login", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar login: " + err.message);
   }
}

export function useCrossLogin() {
   return useMutation<void, Error, CrossLoginProps>({
      mutationKey: ["cross-login"],
      mutationFn: CrossLoginClient,
   });
}
