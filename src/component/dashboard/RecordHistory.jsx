import React from "react";
import { RightArrowSVG } from "../SVG/RightArrowSVG";
import { LeftArrowSVG } from "../SVG/LeftArrowSVG";

export const RecordHistory = () => {
  return (
    <div className="w-full pt-[48px]">
      <div className="flex justify-between">
        <div className="flex">
          <button>
            <LeftArrowSVG />
          </button>
          <p className="pl-4 pr-4 pt-1">last 30 days</p>
          <button>
            <RightArrowSVG />
          </button>
        </div>
        <div>
          <button>newest first</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
