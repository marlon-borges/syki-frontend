import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { BadRequest } from "@/types/BadRequestType";

export interface CreateClassActivityWorkProps {
   link: string | null;
}

export interface CreateClassActivityWorkResponse {
   id: string;
   studentId: string;
   studentName: string | null;
   status: "Pending" | "Delivered" | "Finalized";
   note: number;
   link: string | null;
}

interface CreateClassActivityWorkErrorResponse extends BadRequest {}

async function CreateClassActivityWorkClient({
   id,
   ...body
}: { id: string } & CreateClassActivityWorkProps) {
   try {
      const response = await api.post(`/student/activities/${id}/works`, body);
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: CreateClassActivityWorkErrorResponse =
            err.response.data;
         throw apiError;
      }
      throw {
         code: "...",
         message: "...",
      } satisfies CreateClassActivityWorkErrorResponse;
   }
}

export function useCreateClassActivityWorkMutation(id: string) {
   return useMutation<
      CreateClassActivityWorkResponse,
      Error,
      CreateClassActivityWorkProps
   >({
      mutationKey: ["create-student-class-activity-work", id],
      mutationFn: (body) => CreateClassActivityWorkClient({ id, ...body }),
   });
}
