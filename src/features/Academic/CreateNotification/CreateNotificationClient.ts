import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateNotificationProps {
   title: string | null;
   description: string | null;
   targetUsers: "All" | "Students" | "Teachers";
   timeless: boolean;
}

async function CreateNotificationClient({ ...body }: CreateNotificationProps) {
   try {
      const response = await api.post("/academic/notifications", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar uma nova notificação: " + err.message);
   }
}

export function useCreateNotificationMutation() {
   return useMutation<void, Error, CreateNotificationProps>({
      mutationKey: ["create-notification"],
      mutationFn: CreateNotificationClient,
   });
}
