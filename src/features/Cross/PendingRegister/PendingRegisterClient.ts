import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { useMutation } from "@tanstack/react-query";

export interface PendingRegisterProps {
   email: string | null;
}

export interface PendingRegisterErrorResponse extends BadRequest {}

async function PendingRegisterClient({ email }: PendingRegisterProps) {
   try {
      const response = await api.post("/users", { email });
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: PendingRegisterErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "InvalidEmail",
         message: "Email inválido.",
      } satisfies PendingRegisterErrorResponse;
   }
}

export function usePendingRegisterMutation() {
   return useMutation<void, PendingRegisterErrorResponse, PendingRegisterProps>(
      {
         mutationKey: ["pending-register"],
         mutationFn: PendingRegisterClient,
      },
   );
}
