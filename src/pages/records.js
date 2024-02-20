import React from "react";
import { HeaderDashboard } from "@/component/dashboard/HeaderDashboard";
import { RecordsMain } from "@/component/dashboard/RecordsMain";
import { RecordHistory } from "@/component/dashboard/RecordHistory";

export default function records() {
  return (
    <div className="bg-[#F3F4F6]">
      <div>
        <HeaderDashboard />
      </div>
      <div className="flex gap-[24px] pr-[120px]">
        <RecordsMain />
        <RecordHistory />
      </div>
    </div>
  );
}
