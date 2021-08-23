import { useQuery } from "react-query";
import api from "../api";

export default function useGetCoach(id?: number) {
  return useQuery(["coach", id], () => api.getCoach(id), {
    enabled: !!id
  });
}
