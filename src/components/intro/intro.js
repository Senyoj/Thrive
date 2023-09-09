import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaGithub, FaTwitter, FaLinkedin,} from "react-icons/fa"
import {SiTailwindcss, SiFigma, SiAdobephotoshop,  } from "react-icons/si"
import { sdafdsf} from '../../assets/index'


const intro = () => {
  return (
    <section
      id="Home"
      className="w-full h-[800px] lg:pt-20 pb-30 flex  justify-between ">
      <div className="lg:w-1/2 flex flex-col gap-10 md:w-full ">
        <div className="flex flex-col gap-3 pt-40 md:tracking-wide">
          <h4 className="text-lg font-normal"> Welcome To My Page</h4>
          <h1 className="text-7xl  font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize "> Joel Senyo </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            {" "}
            a <span>Front-end developer  </span>
          </h2>
          <p className="text-base text-bodyFont leading-6 traking-wide md:w-[35rem]">
            I As a passionate computer engineering student with a multifaceted
            skill set, I aim to leverage and grow my experience in the field of
            web development, ui/ux design, programming, cyber security,
            telecommunication and robotics. Seeking a dynamic role that allows
            me to contribute my technical acumen and creativity in a
            collaborative environment.
          </p>
        </div>
        <div className="flex justify-between md:gap-[50px] lg:flex-row max-sm:flex flex-col">
        <div>
          <h2 className="text-base font-titleFont  mb-4 "> FIND ME ON</h2>
          <div  className="flex gap-4">
              <span className="Icon"><a href="https://github.com/Senyoj" ><FaGithub/></a></span>
              <span className="Icon"><a href="https://twitter.com/Joe_teslagh" ><FaTwitter/></a></span>
              <span className="Icon"><a href="https://www.linkedin.com/in/ahadzi-joel-senyo-298b56212/" ><FaLinkedin/></a></span>
          </div>
        </div>
        <div>
          <h2 className="text-base  text-titleFont mb-5 ">BEST SKILLL</h2>      
          <div  className="flex gap-4">
              <span className="Icon"><SiFigma/></span>
              <span className="Icon"><SiTailwindcss/></span>
              <span className="Icon"><SiAdobephotoshop/></span>
          </div>    
        </div>
        </div>
      </div>
      <div className="h-[600px] shadow-shadowOne bg-gray-900  bg-opacity-30 flex justify-center items-bottom lg:visible md:invisible max-md:invisible max-sm:invisible">
        <img src={sdafdsf} alt="profile"  className="md:invisible max-sm:invisible  lg:visible" />
      </div>
    </section>
  );
};

export default intro;