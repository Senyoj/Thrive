import React from "react";

const ResumeCard = ({ title, subtitle, date, desc, cert }) => {
  return (
    <div className="w-full h-1/3 group flex ">
      <div className="w-10 h-[6px]  mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity60 ">
          <span className=" w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300  "></span>
        </span>
      </div>
      <div
        className="w-full h-[300px] bg-black bg-opacity-50 hover:opacity-70 duration-300 rounded-lg  px-10 
        flex flex-col justify-center  shadow-boxShadow "
      >
        <div className="pb-10">
          <h1 className="uppercase tracking-wide font-bold ">{cert}</h1>
          <h2 className="2xl font-semibold group-hover:text-white duration-300">
            {title}
          </h2>
          <span className=" text-red-500">{date}</span>
        </div>
        <div>
          <p className="text-white font-bold">{subtitle}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
