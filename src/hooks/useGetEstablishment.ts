import { useQuery } from "react-query";
import api from "../api";

export default function useGetEstablishment(id?: number) {
  return useQuery(["location", id], () => api.getEstablishment(id), {
    enabled: !!id
  });
}
