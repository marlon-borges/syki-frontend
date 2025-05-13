import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequest";
import { useMutation } from "@tanstack/react-query";

export interface ViewNotificationsProps {
   token: string | null;
}

export interface ViewNotificationsErrorResponse extends BadRequest {}

async function ViewNotificationsClient({ token }: ViewNotificationsProps) {
   try {
      const response = await api.put(
         "/notifications/user",
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
   return useMutation<
      void,
      ViewNotificationsErrorResponse,
      ViewNotificationsProps
   >({
      mutationKey: ["view-notifications"],
      mutationFn: ViewNotificationsClient,
   });
}
