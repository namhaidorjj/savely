import React, { useState } from "react";
import { NewRecordDisplayContext } from "@/context";
import { useContext } from "react";
import { XSVG } from "../SVG/XSVG";

export const RecordBar = () => {
  const { newRecordDisplay, setNewRecordDisplay } = useContext(
    NewRecordDisplayContext
  );

  const [EXPTable, setEXPTable] = useState("");
  const [Amount, setAmount] = useState("");
  const [Categorys, setcategorys] = useState("");
  const [note, setNote] = useState("");

  const addRecord = async () => {
    try {
      setNewRecordDisplay(false);
      const input = {
        EXPTable: EXPTable,
        Amount: Amount,
        Categorys: Categorys,
        note: note,
      };
      console.log(input);

      const res = await fetch("http://localhost:8080/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      console.log(res.status);
    } catch (error) {}
  };

  // const colorChangeIncome = () => {
  //   document
  //     .getElementById("income")
  //     .setAttribute("style", "background-color:violet-600");
  // };

  return (
    <div className=" bg-zinc-950/50 ">
      <div className=" bg-white rounded-xl px-4 absolute w-[792px] h-[512px] mx-auto my-center  flex flex-col pl-6 pr-6 pb-5">
        <div className="flex justify-between  items-center border-b-2 h-[68px]">
          <p className="text-lg font-semibold  ">Add Record</p>
          <button onClick={() => setNewRecordDisplay(false)}>
            <XSVG />
          </button>
        </div>
        <div className="flex w-full pt-5">
          <div className="flex flex-col gap-4 pr-6">
            <div className=" flex bg-[#F3F4F6] w-[348px] h-[40px]  rounded-full">
              <button
                id="expense"
                onChange={(e) => setINCTable(e.target.value)}
                className="w-[172px]    active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-600 h-[40px]  rounded-full">
                Expense
              </button>
              <button
                id="income"
                className="w-[172px] h-[40px] rounded-full   active:bg-green-800 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-600">
                Income
              </button>
            </div>
            <div className="w-[348px] h-[76px] bg-[#F3F4F6] rounded-xl flex flex-col gap-1 pt-3 pl-4">
              <p>Amount</p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="₮ 000.00"
                className="bg-[#F3F4F6]"
              />
            </div>

            <div>
              <p>Category</p>
              <label onChange={(e) => setcategorys(e.target.value)}>
                Choose
              </label>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label>Date</label>
                <input
                  type="date"
                  className="w-[168px] h-[46px] bg-[#F3F4F6] rounded-xl pl-4 pr-4"
                />
              </div>
              <div className="flex flex-col">
                <label>Date</label>
                <input
                  type="time"
                  className="w-[168px] h-[46px] bg-[#F3F4F6] rounded-xl pl-4 pr-4"
                />
              </div>
            </div>
            <button
              onClick={addRecord}
              className="w-[348px] h-[40px] text-white rounded-full  bg-violet-600 hover:bg-violet-500 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300">
              Add Record
            </button>
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex flex-col">
              <label>Payee</label>
              <input
                type="text"
                placeholder="chef"
                className="pl-4 w-[348px] h-[48px] bg-[#F3F4F6] rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <label>Note</label>
              <textarea
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write Here"
                cols="80"
                className="h-64 bg-[#F3F4F6] rounded-lg pl-4 pt-4 flex"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
