import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface LoginProps {
   email: string;
   password: string;
}

interface LoginResponse {
   token: string;
}

async function LoginClient({ email, password }: LoginProps) {
   try {
      const response = await api.post("/login", {
         email,
         password,
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
