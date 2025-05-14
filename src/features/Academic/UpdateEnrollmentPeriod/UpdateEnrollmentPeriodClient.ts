import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface UpdateEnrollmentPeriodProps {
   startAt?: string;
   endAt?: string;
}

async function UpdateEnrollmentPeriodClient({
   id,
   ...body
}: { id: string } & UpdateEnrollmentPeriodProps) {
   try {
      const response = await api.put(
         `/academic/enrollment-periods/${id}`,
         body,
      );
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao editar os dados do período de matrícula informado: " +
            err.message,
      );
   }
}

export function useUpdateEnrollmentPeriodMutation(id: string) {
   return useMutation<void, Error, UpdateEnrollmentPeriodProps>({
      mutationKey: ["update-enrollment-period", id],
      mutationFn: () => UpdateEnrollmentPeriodClient({ id }),
   });
}
