import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetNotificationsClient() {
   try {
      const response = await api.get("/academic/notifications");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as notificações: " + err.message);
   }
}

export function useGetNotifications() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-notifications"],
      queryFn: () => GetNotificationsClient(),
   });
}
