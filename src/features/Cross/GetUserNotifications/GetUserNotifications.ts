import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export interface GetUserNotificationsProps {
   token: string;
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
   return useQuery({
      queryKey: ["get-user-notifications"],
      queryFn: () => GetUserNotificationsClient({ token }),
   });
}
