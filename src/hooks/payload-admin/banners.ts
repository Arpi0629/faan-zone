import { fetcher } from "@/lib/fetcher";
import { ApiRoutes } from "@/services/constants";
import { usePathname } from "next/navigation";
import useSWR from "swr";

interface ReturnProps {
  data: Array<any>;
  error: any;
  isLoading: boolean;
}

export const useBanners = (): ReturnProps => {
  const { data: banners, error, isLoading } = useSWR(ApiRoutes.BANNER, fetcher);

  const data = isLoading || error ? {} : banners;

  return {
    data: data?.docs,
    error,
    isLoading,
  };
};
