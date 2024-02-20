import React from "react";
import { LogoSVG } from "../component/SVG/LogoSVG";
import { DoneSVG } from "../component/SVG/DoneSVG";
import { Mainsvg } from "@/component/SVG/Mainsvg";
import { GeldLogoSVG } from "@/component/SVG/GeldLogoSVG";
import { ConfirmSVG } from "@/component/SVG/ConfirmSVG";

export default function Done() {
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
            <DoneSVG />
            <p className="font-semibold text-2xl">Good Job!</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="w-[384px] h-[32px] text-xs">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
          </div>
          <a href="/">
            <div className="w-[384px] h-[48px] bg-[#0166FF] flex justify-center rounded-3xl items-center">
              <button className="text-white">Go to Dashboard</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
