import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SetupMfaProps {
   token: string;
}

async function SetupMfaClient({ token }: SetupMfaProps) {
   try {
      const response = await axios({
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         url: `${process.env.REACT_APP_API_URL}/mfa/setup`,
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar o setup MFA: " + err.message);
   }
}

export function useSetupMfa(token: string) {
   return useQuery({
      queryKey: ["setup-mfa"],
      queryFn: () => SetupMfaClient({ token }),
   });
}
