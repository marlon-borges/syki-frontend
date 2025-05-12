import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface ViewNotificationsProps {
   token: string;
}

async function ViewNotificationsClient({ token }: ViewNotificationsProps) {
   try {
      const response = await api.put("/notifications/user", null, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao registrar as notificações do usuário como lidas: " +
            err.message,
      );
   }
}

export function useViewNotifications(token: string) {
   return useQuery({
      queryKey: ["view-notifications"],
      queryFn: () => ViewNotificationsClient({ token }),
   });
}
