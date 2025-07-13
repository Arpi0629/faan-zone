"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useBanners } from "@/hooks/payload-admin/banners";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BannerModal } from "./banner-modal";
import { SignUpForm } from "./sign-up-form";
import { BannerSignUp } from "./banner-sign-up";

interface Props {
  className?: string;
}

export const BannerRight: React.FC<Props> = ({ className }) => {
  const { data, isLoading } = useBanners();
  const [selectedBanner, setSelectedBanner] = useState<null | {
    id: number;
    bannerImage: { url: string };
    advertiseImage: { url: string };
  }>(null);

  return (
    <div className={cn("flex justify-center", className)}>
      <ul className="flex flex-col gap-3">
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <li
              key={`loading-${i}`}
              className="w-[300px] h-[300px] bg-gray-200 border border-gray-200 rounded-lg flex items-center justify-center animate-pulse"
            ></li>
          ))
        ) : data ? (
          <>
            {data.map((img) => (
              <Dialog key={img.id}>
                <DialogTrigger
                  asChild
                  className="border border-gray-200 rounded-lg transition-transform hover:scale-105 hover:translate-x-[-8px]"
                >
                  <Image
                    src={img.bannerImage.url}
                    alt={`Banner ${img.id}`}
                    width={300}
                    height={300}
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedBanner(img)}
                  />
                </DialogTrigger>
                <DialogContent
                  showCloseButton
                  className="bg-white rounded-xl p-4 w-fit h-fit"
                >
                  <BannerModal selectedBanner={selectedBanner} />
                </DialogContent>
              </Dialog>
            ))}

            <Dialog>
              <DialogTrigger asChild>
                <li className="bg-gray-100 cursor-pointer shadow-lg rounded-lg flex flex-col items-center justify-center w-[300px] h-[300px] transition-transform hover:scale-105 hover:translate-x-[-8px]">
                  <Plus
                    size={35}
                    strokeWidth={3}
                    color="#A65F00"
                    className="animate-bounce mb-2"
                  />
                  <span className="text-yellow-700 text-center px-4">
                    Add your advertisement here
                  </span>
                </li>
              </DialogTrigger>
              <DialogContent
                showCloseButton
                className="bg-white rounded-xl p-6 w-fit h-fit max-w-[600px]"
              >
                <BannerSignUp />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <li className="bg-gray-100 shadow-lg rounded-lg flex items-center justify-center">
            <Plus size={25} />
            <span className="text-gray-500">Add your advertisement here</span>
          </li>
        )}
      </ul>
    </div>
  );
};
