import React from "react";

const Card = ({ image, title, desc, icons , icon2 }) => {
  return (
    <div>
      <div
        className="w-full   px-12 h-96 mb-5  shadow-2xl rounded-lg  flex  flex-col items-center 
        bg-bodyColor  group hover:bg-gradient-to-b hover:from-black to hover:to-[#1e2024]
        transition-colors duration-300
        "
      >
        <div className=" hover:translate-y-0  translate-y-4 transition-all duration-500">
          <div className="  hover:scale-110  duration-300">{image}</div>
          <div className="flex justify-between items-center p-4 ">
            <div className="text-2xl font-bold ">{title}</div>
            <div className="text-3xl flex gap-10 hover:text-red-400 w-20 h-10 rounded-full   justify-center items-center">{icons}</div>
            <div className="text-3xl flex gap-10 hover:text-red-400 w-20 h-10 rounded-full justify-center items-center">{icon2}</div>
          </div>
          <div className="text-center capitalize">{desc}</div>
        </div>
      </div>
    </div> 
  );
};

export default Card;
