import React from "react";

const Title = ({title, desc}) => {
  return (
    <div>
      <div className="font-titleFont flex flex-col mb-10 ">
        <h3 className="text-gray-300 text-opacity-40">{title}</h3>
        <h1 className="text-5xl text-gray-300 font-bold">{desc}</h1>
      </div>
    </div>
  );
};

export default Title;
