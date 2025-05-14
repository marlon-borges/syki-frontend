import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface ReleaseClassesForEnrollmentProps {
   classes: string[];
}

async function ReleaseClassesForEnrollmentClient({
   ...body
}: ReleaseClassesForEnrollmentProps) {
   try {
      const response = await api.put(
         "/academic/classes/release-for-enrollment",
         body,
      );
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao liberar as turmas: " + err.message);
   }
}

export function useReleaseClassesForEnrollmentMutation() {
   return useMutation<void, Error, ReleaseClassesForEnrollmentProps>({
      mutationKey: ["release-classes-for-enrollment"],
      mutationFn: ReleaseClassesForEnrollmentClient,
   });
}
