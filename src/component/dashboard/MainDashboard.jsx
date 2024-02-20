import React from "react";
import { HeaderDashboard } from "./HeaderDashboard";
import { CardsDashboard } from "./CardsDashboard";
import { Income } from "./Income";
import { LastRecords } from "./LastRecords";

export default function MainDashboard() {



  
  return (
    <div className="bg-[#F3F4F6]">
      <div className="bg-[#FFF]">
        <HeaderDashboard />
      </div>
      <div className="pl-[120px] pr-[120px] pt-[32px] pb-[20px] flex flex-col gap-[24px]">
        <CardsDashboard />
        <Income />
        <LastRecords />
      </div>
    </div>
  );
}
