import React from "react";


const TestimonialCard = ({ name, comment }) => {
  return (
    <div>
      <div className="w-[36rem] h-[250px] rounded-2xl bg-black bg-opacity-40 mt-[60px] max-sm:w-auto max-sm:h-auto">
        <div className="text-4xl font-bold p-10 text-designColor">{name}</div>
        <div className="text-xl text-gray-300 text-center tracking-wide leading-10 "> {comment}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
