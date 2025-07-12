import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { ApiRoutes } from "@/services/constants";

export const useBanner = () => {
  const { data, error, isLoading } = useSWR(ApiRoutes.BANNER, fetcher);

console.log(data);

  return {
    data: error || isLoading ? [] : data ,
    isLoading,
    isError: !!error,
  };
};