import React from "react";
import { cn } from "@/lib/utils";
import { Video } from "lucide-react";

interface Props {
  className?: string;
}

export const EarnCatalog: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div
      className={cn(
        "w-[789px] h-[1191px] border-2 shadow-2xl  m-auto flex gap-[10px] justify-center p-10  flex-wrap mt-[30px] pt-[80px]",
        className
      )}
    >
      <div className="flex flex-col items-center  gap-[40px] mb-10">
        <h1 className="text-6xl"> Start Earning Coins Now!</h1>
        <h2 className="text-4xl text-center">
          {" "}
          Watch videos, complete step-by-step tasks, and collect coins instantly
        </h2>
      </div>

      <div className="w-[228px] h-[374px] border-2 ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>

      <div className="w-[228px] h-[374px] border-2 ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>

      <div className="w-[228px] h-[374px] border-2 ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>

      <div className="w-[228px] h-[374px] border-2 ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>

      <div className="w-[228px] h-[374px] border-2 ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>

      <div className="w-[228px] h-[374px] border-2  ">
        <div className="flex justify-end p-2">
          <img src="/svg/logo.svg" alt="" width={23} height={23} />
        </div>

        <div className="w-[200px] h-[200px] border-2 shadow-2xl border-amber-400 rounded-[10px] ml-3 flex items-center justify-center">
          <Video width={50} height={50} />
        </div>

        <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[25px]">
          Earn coins
        </button>
      </div>
      <button className="flex items-center justify-center  w-[140px] h-[50px] bg-yellow-700 rounded-2xl  text-amber-50 text-2xl m-auto mt-[30px]">
        More
      </button>
    </div>
  );
};
