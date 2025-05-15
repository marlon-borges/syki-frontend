import { api } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export interface CreateLessonAttendanceProps {
   presentStudents: string[];
}

async function CreateLessonAttendanceClient({
   id,
   ...body
}: { id: string } & CreateLessonAttendanceProps) {
   try {
      const response = await api.put(`/teacher/lessons/${id}/attendance`, body);
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao realizar a chamada da aula: " + err.message);
   }
}

export function useCreateLessonAttendanceMutation(id: string) {
   return useMutation<void, Error, CreateLessonAttendanceProps>({
      mutationKey: ["create-teacher-lesson-attendance", id],
      mutationFn: (body) => CreateLessonAttendanceClient({ id, ...body }),
   });
}
