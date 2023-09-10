import React from "react";
import {
  FaBars,
  FaCode,
  FaArrowRight,
  FaCamera,
  FaBloggerB,
  FaLock,
  FaAppStore,
} from "react-icons/fa";
import Title from "../layout/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="Features" className="w-full h-auto  pb-20   border-b-[1px] pt-24">
      <Title title="Features" desc="What I Do " />
      <div className="grid lg:grid-cols-3 gap-20 md:grid-cols-2">
        <Card
          title=" UI / UX Design"
          desc="Using the right tools, I create stunning and creative  application designs and create a fantanstic user experience for my clients "
          icon={<FaBars />}
          arrow={<FaArrowRight />}
        />
        <Card
          title=" Web Development "
          desc="I create all kinds of web applications ranging from static websites to dynamic ones with rgeat user experience."
          icon={<FaAppStore />}
          arrow={<FaArrowRight />}
        />
        <Card
          title=" Software Troubleshooting"
          desc=" With my skills, I am able troubleshoot all kinds of sofftwares , run text and check mulfunstions "
          icon={<FaCode />}
          arrow={<FaArrowRight />}
        />
        <Card
          title=" Videography"
          desc=" I Capture the very best moments of your life with best quality and keep memories that last forever "
          icon={<FaCamera />}
          arrow={<FaArrowRight />}
        />
        <Card
          title=" 3D Sculpting"
          desc=" I create 3D designs , scult stractures , create animations and soo much more!!! "
          icon={<FaBloggerB />}
          arrow={<FaArrowRight />}
        />
        <Card
          title="Cyber-Security"
          desc=" I analyze and configure secure networks for my clients , checking network vulnurabilities and providing them with the best security services"
          icon={<FaLock />}
          arrow={<FaArrowRight />}
        />
      </div>
    </section>
  );
};

export default Features;
