import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetUserNotificationsResponse {
   notificationId: string;
   title: string | null;
   description: string | null;
   createdAt: string;
   viewedAt: string | null;
}

async function GetUserNotificationsClient() {
   try {
      const response = await api.get("/notifications/user");
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao buscar as notificações do usuário: " + err.message,
      );
   }
}

export function useGetUserNotifications() {
   return useQuery<GetUserNotificationsResponse, Error, {}>({
      queryKey: ["get-user-notifications"],
      queryFn: () => GetUserNotificationsClient(),
   });
}
