import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { StatesType } from "@/types/StatesType";
import { useMutation } from "@tanstack/react-query";

export interface UpdateCampusProps {
   id: string;
   name: string | null;
   state: StatesType;
   city: string | null;
}

export interface UpdateCampusErrorResponse extends BadRequest {}

async function UpdateCampusClient({ ...body }: UpdateCampusProps) {
   try {
      const response = await api.put("/academic/campi", body);
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: UpdateCampusErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "CampusNotFound",
         message: "Campus não encontrado.",
      } satisfies UpdateCampusErrorResponse;
   }
}

export function useUpdateCampusMutation() {
   return useMutation<void, UpdateCampusErrorResponse, UpdateCampusProps>({
      mutationKey: ["update-campus"],
      mutationFn: UpdateCampusClient,
   });
}
