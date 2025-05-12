import { apiUrl } from "@/config/Config";
import axios from "axios";

export const api = axios.create({
   baseURL: apiUrl,
   headers: {
      "Content-Type": "application/json",
   },
});
