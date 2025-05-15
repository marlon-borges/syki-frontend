import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { BadRequest } from "@/types/BadRequestType";

export interface AddStudentClassActivityNoteProps {
   studentId: string;
   value: number;
}

interface AddStudentClassActivityNoteErrorResponse extends BadRequest {}

async function AddStudentClassActivityNoteClient({
   id,
   ...body
}: { id: string } & AddStudentClassActivityNoteProps) {
   try {
      const response = await api.post(
         `/teacher/class-activities/${id}/activities`,
         body,
      );
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: AddStudentClassActivityNoteErrorResponse =
            err.response.data;
         throw apiError;
      }
      throw {
         code: "ClassActivityNotFound",
         message: "Atividade não encontrada.",
      } satisfies AddStudentClassActivityNoteErrorResponse;
   }
}

export function useAddStudentClassActivityNoteMutation(id: string) {
   return useMutation<void, Error, AddStudentClassActivityNoteProps>({
      mutationKey: ["add-teacher-student-class-activity-note", id],
      mutationFn: (body) => AddStudentClassActivityNoteClient({ id, ...body }),
   });
}
