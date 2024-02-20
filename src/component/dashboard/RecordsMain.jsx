import React from "react";
import { PlusSVG } from "../SVG/PlusSVG";
import { NewRecordDisplayContext } from "@/context";
import { useContext } from "react";
import { RecordBar } from "./RecordBar";

export const RecordsMain = () => {
  const { newRecordDisplay, setNewRecordDisplay } = useContext(
    NewRecordDisplayContext
  );
  return (
    <div className="pl-[120px] h-[1080px] pt-[32px] pb-[20px] flex flex-col gap-[24px]">
      {newRecordDisplay === true && (
        <div className="absolute m-auto w-3/5 h-2/5  flex flex-col items-center justify-center">
          <RecordBar />
        </div>
      )}
      <div className="pl-4 pr-4 w-[282px] pt-6 flex flex-col gap-[24px] bg-white rounded-lg shadow-xl ">
        <div className="flex flex-col gap-[24px] bg-white ">
          <p className="font-bold text-2xl">Records</p>
          <button
            onClick={() => setNewRecordDisplay(!newRecordDisplay)}
            className="flex gap-[4px] w-[250px] h-[32px]  bg-violet-600 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 rounded-full items-center justify-center text-white">
            <PlusSVG />
            <p>Add</p>
          </button>
        </div>
        <div>
          <input
            className="w-[250px] h-[32px] bg-[#F3F4F6] rounded-xl pl-4"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="w-[110px] h-[144px]">
          <p className="text-xl ">Types</p>
          <div className="flex gap-3 pl-2">
            <input type="checkbox" id="myCheck" />
            <label for="myCheck">All</label>
          </div>
          <div className="flex gap-3 pl-2">
            <input type="checkbox" id="myCheck" />
            <label for="myCheck">Income</label>
          </div>
          <div className="flex gap-3 pl-2">
            <input type="checkbox" id="myCheck" />
            <label for="myCheck">Exponse</label>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
