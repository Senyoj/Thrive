import React from "react";

const Card = ({ title, desc, icon, arrow }) => {
  return (
    <div>
      <div
        className="w-full   px-12 h-80  shadow-2xl rounded-lg  flex items-center 
        bg-bodyColor  group hover:bg-gradient-to-b hover:from-black to hover:to-[#1e2024]
        transition-colors duration-300
        "
      >
        <div className="flex flex-col gap-2 translate-y-5 hover:translate-y-0  duration-500 ">
          <div className="text-red-500 text-5xl ">{icon}</div>
          <div className=" text-2xl pt-10 text-red-400 ">{title}</div>
          <div className="text-gray-100 ">{desc}</div>
          <div className="text-red-400  ">{arrow}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
