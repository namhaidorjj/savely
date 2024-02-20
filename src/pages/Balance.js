import React from "react";
import { LogoSVG } from "../component/SVG/LogoSVG";
import { CoinSVG } from "../component/SVG/CoinSVG";
import { Mainsvg } from "@/component/SVG/Mainsvg";
import { GeldLogoSVG } from "@/component/SVG/GeldLogoSVG";
import { ConfirmSVG } from "@/component/SVG/ConfirmSVG";

export default function Balance() {
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
            <CoinSVG />
            <p className="font-semibold text-2xl">Set up your cash Balance</p>
          </div>
          <div>
            <input
              className="w-[384px] flex items-center pl-4 rounded-lg bg-[#D1D5DB] h-[48px] bg-grey-400"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="w-[384px] h-[32px] text-xs">
              How much cash do you have in your wallet?
            </p>
          </div>
          <div>
            <a href="/Done">
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
