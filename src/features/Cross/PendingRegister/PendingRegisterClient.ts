import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface PendingRegisterProps {
   email: string;
}

async function PendingRegisterClient({ email }: PendingRegisterProps) {
   try {
      const response = await axios({
         method: "POST",
         url: `${process.env.REACT_APP_API_URL}/users`,
         data: {
            email,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o registro: " + err.message);
   }
}

export function usePendingRegisterQuery(email: string) {
   return useQuery({
      queryKey: ["pending-register"],
      queryFn: () => PendingRegisterClient({ email }),
   });
}
