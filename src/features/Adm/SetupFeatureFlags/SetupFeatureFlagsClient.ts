import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface SetupFeatureFlagsProps {
   crossLogin: boolean;
}

async function SetupFeatureFlagsClient({ crossLogin }: SetupFeatureFlagsProps) {
   try {
      const response = await api.put("/adm/feature-flags", crossLogin);
      return response.data;
   } catch (err: any) {
      throw new Error(
         "Erro ao definir os valores para as feature flags: " + err.message,
      );
   }
}

export function useSetupFeatureFlagsMutation() {
   return useMutation<void, Error, SetupFeatureFlagsProps>({
      mutationKey: ["adm-setup-feature-flags"],
      mutationFn: (body) => SetupFeatureFlagsClient({ ...body }),
   });
}
