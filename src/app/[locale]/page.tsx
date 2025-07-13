import { BannerLeft } from "@/components/banner-left";
import { BannerRight } from "@/components/banner-right";
import { Catalog } from "@/components/catalog";
import { EarnCatalog } from "@/components/earn-catalog";
import { Ticket } from "@/components/ticket";
import { Hero } from "@/components/hero";
import { Progress } from "@radix-ui/react-progress";
import { BannerSignUp } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex gap-1">
        <BannerLeft />
        <div className="flex flex-col gap-1 mx-auto">
          <Catalog />
          <EarnCatalog />
          <Ticket />
        </div>
        <BannerRight />
      </div>
      <BannerSignUp />
    </>
  );
}
