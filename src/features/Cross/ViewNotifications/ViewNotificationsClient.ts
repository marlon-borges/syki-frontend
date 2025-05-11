import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface ViewNotificationsProps {
   token: string;
}

async function ViewNotificationsClient({ token }: ViewNotificationsProps) {
   try {
      const response = await axios({
         method: "PUT",
         headers: {
            Authorization: `Bearer ${token}`,
         },
         url: `${process.env.REACT_APP_API_URL}/notifications/user`,
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
