import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface ViewNotificationsErrorResponse extends BadRequest {}

async function ViewNotificationsClient() {
   try {
      const response = await api.put("/notifications/user");
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: ViewNotificationsErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "unknown",
         message: "Erro ao registrar as notificações do usuário como lidas.",
      } satisfies ViewNotificationsErrorResponse;
   }
}

export function useViewNotificationsMutation() {
   return useMutation<void, ViewNotificationsErrorResponse, {}>({
      mutationKey: ["view-notifications"],
      mutationFn: ViewNotificationsClient,
   });
}
