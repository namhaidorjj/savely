import React from "react";
import { NewRecordDisplayContext } from "@/context";
import { useContext } from "react";

export const newRecord = () => {
  const { newRecordDisplay, setNewRecordDisplay } = useContext(
    NewRecordDisplayContext
  );

  return <div className={`${newRecordDisplay}`}></div>;
};
