import { api } from "@/services/api";
import { BadRequest } from "@/types/BadRequestType";
import { ClassScheduleDaysType } from "@/types/ClassScheduleDaysType";
import { ClassStatusType } from "@/types/ClassStatusType";
import { ClassTimesType } from "@/types/ClassTimesType";
import { useMutation } from "@tanstack/react-query";

export interface CreateClassProps {
   disciplineId: string;
   teacherId: string;
   period: string | null;
   vacancies: number;
   schedules: ScheduleProps[];
}

interface ScheduleProps {
   day: typeof ClassScheduleDaysType;
   start: typeof ClassTimesType;
   end: typeof ClassTimesType;
}

export interface CreateClassResponse {
   id: string;
   discipline: string | null;
   teacher: string | null;
   period: string | null;
   vacancies: number;
   frequency: number;
   status: typeof ClassStatusType;
   schedules: ScheduleProps[];
   lessons: LessonProps[];
   fillRatio: string | null;
   isSelected: boolean;
}

interface LessonProps {
   id: string;
   number: number;
   date: string;
   schedule: string | null;
   status: "Pending" | "Finalized";
   frequency: number;
}

export interface CreateClassErrorResponse extends BadRequest {}

async function CreateClassClient({ ...body }: CreateClassProps) {
   try {
      const response = await api.post("/academic/classes", body);
      return response.data;
   } catch (err: any) {
      if (err.response?.data) {
         const apiError: CreateClassErrorResponse = err.response.data;
         throw apiError;
      }
      throw {
         code: "DisciplineNotFound",
         message: "Disciplina não encontrada.",
      } satisfies CreateClassErrorResponse;
   }
}

export function useCreateClassMutation() {
   return useMutation<CreateClassResponse, Error, CreateClassProps>({
      mutationKey: ["create-class"],
      mutationFn: CreateClassClient,
   });
}
