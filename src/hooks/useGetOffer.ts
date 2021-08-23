import { useQuery } from "react-query";
import api from "../api";

export default function useGetOffer(id: number) {
  return useQuery(["offer", id], () => api.getOffer(id));
}
