import React from "react";
import { LogoSVG } from "../SVG/LogoSVG";
import { PlusSVG } from "../SVG/PlusSVG";
import { useContext } from "react";
import { NewRecordDisplayContext } from "@/context";

export const HeaderDashboard = () => {
  const { newRecordDisplay, setNewRecordDisplay } = useContext(
    NewRecordDisplayContext
  );

  console.log("hhe");
  console.log("hhaaaaa");

  return (
    <div>
      <div className="flex h-[72px] items-center bg-[#FFF] justify-between pl-[120px] pr-[120px]">
        <div className="flex gap-[24px]">
          <LogoSVG />
          <a href="/dashboard">
            <p>Dashboard</p>
          </a>
          <a href="/records">
            <button>Records</button>
          </a>
        </div>
        <div>
          <button onClick={() => setNewRecordDisplay(!newRecordDisplay)}>
            <div className="flex gap-[4px] w-[99px] h-[32px] bg-violet-600 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-full items-center justify-center text-white">
              <PlusSVG />
              <p>Record</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
