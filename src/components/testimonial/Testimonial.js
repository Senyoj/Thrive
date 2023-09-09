import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Title from "../layout/Title";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "I had an amazing experience working with this company. Their team was professional, efficient, and truly exceeded my expectations. I would highly recommend their services!",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "I've been a customer for years, and I'm consistently impressed by the quality of their work. Their attention to detail and dedication to customer satisfaction is unmatched..",
  },
  {
    id: 3,
    name: "David Johnson",
    comment:
      "The team at this company is top-notch. They not only delivered outstanding results but also provided exceptional support throughout the entire process.",
  },
];

const TestimonialsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center text-center  pt-20">
      <Title title="What Customers are saying " desc="About Me" />

      <div className="flex justify-between items-center w-[36rem] max-sm:w-[20rem]">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md mr-4"
        >
          &lt;
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full shadow-md ml-4 "
        >
          &gt;
        </button>
      </div>
      <TestimonialCard
        name={testimonialsData[activeIndex].name}
        comment={testimonialsData[activeIndex].comment}
      />
    </div>
  );
};

export default TestimonialsList;
