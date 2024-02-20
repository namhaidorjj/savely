import React from "react";
import { BlueDotSVG } from "./cards svgs/BlueDotSVG";
import { GreenDotSVG } from "./cards svgs/GreenDotSVG";
import { UpArrowSVG } from "./cards svgs/UpArrowSVG";
import { DownArrowSVG } from "./cards svgs/DownArrowSVG";

export const CardsDashboard = () => {
  return (
    <div className="flex gap-[24px]  justify-between">
      <div className="card w-1/3 h-[220px]  bg-base-100 shadow-xl image-full">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn  bg-violet-600 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[220px] shadow-xl rounded-lg bg-white">
        <div className="flex items-center gap-[4px] px-[24px] py-[16px] border-b-2">
          <GreenDotSVG />
          Your Income
        </div>
        <div className="flex flex-col gap-4 px-[24px] py-[20px]">
          <div>
            <p className="text-4xl font-bold">1,200,000₮</p>
            <p>Your Income Amount</p>
          </div>
          <div className="flex gap-2">
            <UpArrowSVG />
            <p>32% from last month</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[220px] rounded-lg shadow-xl bg-white">
        <div className="flex items-center gap-[4px] px-[24px] py-[16px] border-b-2">
          <BlueDotSVG />
          Your Income
        </div>
        <div className="flex flex-col gap-4 px-[24px] py-[20px]">
          <div>
            <p className="text-4xl font-bold">-1,200,000₮</p>
            <p>Your Income Amount</p>
          </div>
          <div className="flex gap-2">
            <DownArrowSVG />
            <p>32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
