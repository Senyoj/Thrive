import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      />
      <div className="w-full pt-12 border-b-[1px] border-b-black">
        <div className="grid lg:grid-cols-2 gap-10 md:grid-cols-1">
          <div >
            <div className="font-titleFont ">
              <p className="text-sm text-designColor tracking-[4px] ">
                Educational Path
              </p>
              <h2 className="text-4xl font-bold ">Education Quality </h2>
            </div>
            <div className=" mt-14 w-full h-[1000px] border-black border-opacity-40 flex flex-col gap-10 border-l-[6px]">
              <ResumeCard
                cert="Bachelor's Degree"
                title="Computer Engineering"
                subtitle=" University Of Energy and Natural Resources (UENR) "
                date="2023-2027"
                desc=" Courses: Computer Programming, Electronics, MatLab , computer Aided Design........"
              />

              <ResumeCard
                cert="Waec Certificate"
                title="General Science "
                subtitle=" Zebilla Senior High School (ZEBSTECH) "
                date="2019-2022"
                desc=" Courses:  Biology , Chemistry , Physics... "
              />

              <ResumeCard
                title=" BECE Certificate  "
                subtitle=" Tuffour Red sox International  School (TRS)"
                date=" -2018"
                desc=" At this stage , I attained the Basic education certificate exams Cert Which got me Into High School  "
              />
            </div>
          </div>

          {/* job experience */}
          <div>
            <div className=" font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px] ">Onfield</p>
            <h2 className="text-4xl font-bold ">Job Experience </h2>
          </div>
            <div className=" mt-14 w-full h-[1000px] border-black border-opacity-40 flex flex-col gap-10 border-l-[6px]">
              <ResumeCard
                cert="C.E.O Mad_Tech Foundation"
                title=" A Computer Engineer "
                subtitle=" Suyani- Ghana "
                date="2023-2027"
                desc="Founder of a Tech Company focused on building softwares, design and deployment of applicaions, Cyber security analysis"
              />

              <ResumeCard
                cert="Tech attendace"
                title="Software Troubleshooting "
                subtitle=" Bawku _Upper East Ghana"
                date="2019-2022"
                desc="Toubleshooting softwares , finding bugs and solving  malware attacks problems in  software systems "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
