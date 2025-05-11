import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface FinishRegisterProps {
   token: string;
   password: string;
}

async function FinishRegisterClient({ token, password }: FinishRegisterProps) {
   try {
      const response = await axios({
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         url: `${process.env.REACT_APP_API_URL}/users`,
         data: {
            token,
            password,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o registro final: " + err.message);
   }
}

export function useFinishRegisterQuery(token: string, password: string) {
   return useQuery({
      queryKey: ["finish-register"],
      queryFn: () => FinishRegisterClient({ token, password }),
   });
}
