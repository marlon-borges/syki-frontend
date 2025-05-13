import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface SetupMfaProps {
   token: string | null;
}

export interface SetupMfaErrorResponse extends BadRequest {}

async function SetupMfaClient({ token }: SetupMfaProps) {
   try {
      const response = await api.post(
         "/mfa/setup",
         {},
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         },
      );
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: SetupMfaErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "InvalidMfaToken",
         message: "MFA token inválido.",
      } satisfies SetupMfaErrorResponse;
   }
}

export function useSetupMfaMutation() {
   return useMutation<void, SetupMfaErrorResponse, SetupMfaProps>({
      mutationKey: ["setup-mfa"],
      mutationFn: SetupMfaClient,
   });
}
