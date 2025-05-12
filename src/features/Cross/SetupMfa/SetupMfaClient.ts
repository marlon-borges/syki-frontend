import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface SetupMfaProps {
   token: string;
}

async function SetupMfaClient({ token }: SetupMfaProps) {
   try {
      const response = await api.post("/mfa/setup", null, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar o setup MFA: " + err.message);
   }
}

export function useSetupMfaMutation(token: string) {
   return useMutation({
      mutationKey: ["setup-mfa"],
      mutationFn: () => SetupMfaClient({ token }),
   });
}
