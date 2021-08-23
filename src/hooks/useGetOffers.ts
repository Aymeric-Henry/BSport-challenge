import { useQuery } from "react-query";
import api from "../api";

export default function useGetOffers(query: {
  min_date:string,
  max_date: string
}) {
  const params = {...query, company: 6};
  return useQuery(["offers", query.min_date, query.max_date], () => api.getOffers(params));
}
