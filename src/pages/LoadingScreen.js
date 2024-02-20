import React from "react";
import { LogoSVG } from "../component/SVG/LogoSVG";
import { GeldLogoSVG } from "../component/SVG/GeldLogoSVG";
import { LoadingSVG } from "@/component/SVG/LoadingSVG";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[172px] w-1/2 h-[184px] gap-[48px] flex flex-col justify-center items-center">
        <div className="flex gap-[17px]">
          <div>
            <LogoSVG />
          </div>
          <GeldLogoSVG />
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <LoadingSVG />
          <p className="">Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
}
