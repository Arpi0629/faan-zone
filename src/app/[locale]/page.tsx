import { Banner } from "@/components/banner";
// import { Catalog } from "@/components/catalog";
// import { EarnCatalog } from "@/components/earn-catalog";

import { Hero } from "@/components/hero";
// import { Ticket } from "@/components/ticket";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex gap-1">
        <Banner />
        {/* <Catalog /> */}
        <Banner />
      </div>
      {/* 
      <EarnCatalog />
      <Ticket /> */}
    </>
  );
}
