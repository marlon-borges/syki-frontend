import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetUserNotificationsProps {
   token: string;
}

export interface GetUserNotificationsResponse {
   notificationId: string;
   title: string | null;
   description: string | null;
   createdAt: string;
   viewedAt: string | null;
}

async function GetUserNotificationsClient({
   token,
}: GetUserNotificationsProps) {
   try {
      const response = await api.get("/notifications/user", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as notificações do usuário: " + err.message,
      );
   }
}

export function useGetUserNotifications(token: string) {
   return useQuery<
      GetUserNotificationsResponse,
      Error,
      GetUserNotificationsProps
   >({
      queryKey: ["get-user-notifications", token],
      queryFn: () => GetUserNotificationsClient({ token }),
   });
}
