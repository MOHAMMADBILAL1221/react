import React from "react";

function Chip({ title, OnClick, isChosen }) {
  return (
    <div
      onClick={OnClick}
      className={`${
        isChosen ? "bg-orange-900 text-white" : "bg-white text-black"
      } cursor-pointer hover:bg-purple-100 inline-block m-2 p-2 w-fit px-4 border border-purple-200 rounded-md`}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default Chip;
