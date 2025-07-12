"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Img from "next/image";
import { useBanners } from "@/hooks/payload-admin/banners";

interface Props {
  className?: string;
}

export const Banner: React.FC<Props> = ({ className }) => {
  const { data } = useBanners();

  console.log(data);
  return (
    <div className={cn("flex justify-center", className)}>
      <ul className="">
        {data &&
          data.map((img: { id: number; bannerImage: { url: string } }) => (
            <li key={img.id} className="flex-shrink-0">
              <Img
                src={img.bannerImage.url}
                alt="Promotional banner"
                width={400}
                height={200}
                className="rounded-lg object-cover"
                priority
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
