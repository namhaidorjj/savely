import React from "react";
import { LogoSVG } from "../component/SVG/LogoSVG";
import { MemorySVG } from "../component/SVG/MemorySVG";
import { Mainsvg } from "@/component/SVG/Mainsvg";
import { GeldLogoSVG } from "@/component/SVG/GeldLogoSVG";
import { ConfirmSVG } from "@/component/SVG/ConfirmSVG";

export default function Currency() {
  return (
    <div className="h-full w-3/2 pt-[40px] flex flex-col items-center gap-[144px]">
      <div className="flex flex-col gap-[48px] h-[136px] w-[240px] ">
        <div className="flex justify-center gap-[11px] items-center">
          <LogoSVG />
          <GeldLogoSVG />
        </div>
        <Mainsvg />
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4">
            <MemorySVG />
            <p className="font-semibold text-2xl">Select base currency</p>
          </div>
          <div className="w-[384px] h-[44px] bg-[#F3F4F6] border-2 flex items-center rounded-xl">
            <select className="w-[384px] h-[24px] bg-[#F3F4F6]">
              <option>MNT - Mongolian Tugrik</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="w-[384px] h-[32px] text-xs">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </p>
          </div>
          <div>
            <a href="/Balance">
              <div className="w-[384px] h-[48px] bg-[#0166FF] flex justify-center rounded-3xl">
                <button className="text-white">Confirm</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
