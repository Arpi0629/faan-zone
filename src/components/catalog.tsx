import React from "react";
import { cn } from "@/lib/utils";
import { LockKeyhole } from "lucide-react";

interface Props {
  className?: string;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div
      className={cn(
        "max-w-[789px]  border-2 shadow-2xl  mx-auto flex gap-5 justify-center  flex-wrap  ",
        className
      )}
    >
      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-50 flex items-center justify-center shadow-2xl">
        <img src="/svg/logo.svg" alt="" />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="w-[200px] h-[200px] border-2 border-amber-400 rounded-[10px] bg-gray-200 flex items-center justify-center shadow-2xl">
        <LockKeyhole width={50} height={50} />
      </div>

      <div className="flex gap-5 mt-[50px]">
        <span className="text-[35px]">Ends in</span>
        <div className="w-[50px] h-[50px] rounded-[5px] bg-amber-400 flex items-center justify-center">
          <span className="text-[35px]">00</span>
        </div>
        <span className="text-[30px]">:</span>
        <div className="w-[50px] h-[50px] rounded-[5px] bg-amber-400 flex items-center justify-center ">
          <span className="text-[35px]">59</span>
        </div>
        <span className="text-[30px]">:</span>
        <div className="w-[50px] h-[50px] rounded-[5px] bg-amber-400 flex items-center justify-center">
          <span className="text-[35px]">48</span>
        </div>
      </div>
    </div>
  );
};
