import { useQuery } from "react-query";
import api from "../api";

export default function useGetBooking(id?: number) {
  return useQuery(["booking", id], () => api.getBooking(id), {
    enabled: !!id
  });
}
