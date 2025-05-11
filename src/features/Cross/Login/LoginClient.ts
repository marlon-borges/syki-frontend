import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface LoginProps {
   email: string;
   password: string;
}

interface LoginResponse {
   token: string;
}

async function LoginClient({ email, password }: LoginProps) {
   try {
      const response = await axios({
         method: "POST",
         url: `${process.env.REACT_APP_API_URL}/login`,
         data: { email, password },
      });
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar o login: " + err.message);
   }
}

export function useLoginQuery(email: string, password: string) {
   return useQuery<LoginResponse, Error>({
      queryKey: ["login"],
      queryFn: () => LoginClient({ email, password }),
   });
}
