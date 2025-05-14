import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

async function GetCourseOfferingsClient() {
   try {
      const response = await api.get("/academic/course-offerings");
      return response.data;
   } catch (err: any) {
      throw new Error("Erro ao buscar as ofertas de curso: " + err.message);
   }
}

export function useGetCourseOfferings() {
   return useQuery<void, Error, {}>({
      queryKey: ["get-courses"],
      queryFn: () => GetCourseOfferingsClient(),
   });
}
