import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateEnrollmentPeriodProps {
   id: string | null;
   startAt: string;
   endAt: string;
}

async function CreateEnrollmentPeriodClient({
   ...body
}: CreateEnrollmentPeriodProps) {
   try {
      const response = await api.post("/academic/enrollment-periods", body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao criar um período de matrícula: " + err.message);
   }
}

export function useCreateEnrollmentPeriodMutation() {
   return useMutation<void, Error, CreateEnrollmentPeriodProps>({
      mutationKey: ["create-enrollment-period"],
      mutationFn: CreateEnrollmentPeriodClient,
   });
}
