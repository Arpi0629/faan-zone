"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  selectedBanner: {
    id: number;
    advertiseImage: { url: string };
  } | null;
}

export const BannerModal: React.FC<Props> = ({ selectedBanner }) => {
  if (!selectedBanner) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Image
        key={selectedBanner.id}
        src={selectedBanner.advertiseImage.url}
        alt={`Modal-banner ${selectedBanner.id}`}
        width={1000}
        height={200}
        className="rounded-xl"
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">The best shops in Armenia</h2>
          <Button>Go To Shop</Button>
          <span className="text-sm">Follow us</span>
        </div>
      </div>
    </div>
  );
};
