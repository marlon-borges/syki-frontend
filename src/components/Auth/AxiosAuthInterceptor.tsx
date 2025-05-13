import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { api } from "@/services/api";

export function AxiosAuthInterceptor() {
   const [cookies] = useCookies(["AccessToken"]);

   useEffect(() => {
      if (cookies.AccessToken) {
         api.defaults.headers.common["Authorization"] =
            `Bearer ${cookies.AccessToken}`;
      } else {
         delete api.defaults.headers.common["Authorization"];
      }
   }, [cookies.AccessToken]);

   return null;
}
