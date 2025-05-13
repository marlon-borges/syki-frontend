import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface SetupMfaErrorResponse extends BadRequest {}

async function SetupMfaClient() {
   try {
      const response = await api.post("/mfa/setup");
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
   return useMutation<void, SetupMfaErrorResponse, {}>({
      mutationKey: ["setup-mfa"],
      mutationFn: SetupMfaClient,
   });
}
