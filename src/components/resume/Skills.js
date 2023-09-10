import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full flex lg:flex-row gap-20 md:flex-col  max-sm:flex flex-col ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      />
      <div className="lg:w-1/2 md:w-full  ">
        <div className=" py-12 font-titleFont  ">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold ">Design Skills </h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6  ">
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">Photoshop</p>
              <p>90%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">Premire Pro</p>
              <p>80%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">Figma</p>
              <p>100%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
               className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative "></motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">PCD Design</p>
              <p>85%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative "></motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full">
        <div className=" py-12 font-titleFont ">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold ">Development Skills </h2>
        </div>
        <div className="mt-14 w-full">
        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">React</p>
              <p>70%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">Javascript</p>
              <p>90%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">Software</p>
              <p>75%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
               className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative "></motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="flex justify-between">
              <p className="text-sm uppercase font-medium">App Development</p>
              <p>85%</p>
            </span>
            <span className="w-full h-2 bg-black  bg-opacity-40 inline-flex rounded-md mt-2">
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative "></motion.span>
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
