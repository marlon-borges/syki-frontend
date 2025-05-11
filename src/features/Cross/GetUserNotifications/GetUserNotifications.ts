import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface GetUserNotificationsProps {
   token: string;
}

async function GetUserNotificationsClient({
   token,
}: GetUserNotificationsProps) {
   try {
      const response = await axios({
         method: "GET",
         headers: {
            Authorization: `Bearer ${token}`,
         },
         url: `${process.env.REACT_APP_API_URL}/notifications/user`,
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
