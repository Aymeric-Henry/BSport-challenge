import { useQuery } from "react-query";
import api from "../api";

export default function useGetActivity(id?: number) {
  return useQuery(["activity", id], () => api.getActivity(id), {
    enabled: !!id
  });
}
