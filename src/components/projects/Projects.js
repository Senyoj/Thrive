import React from "react";
import Title from "../layout/Title";
import Card from "./Card";
import {fsd} from "../../assets/index";
import {portfolio} from "../../assets/index";
import {dappp} from "../../assets/index";
import {library} from "../../assets/index";
import {LIB} from "../../assets/index";
import {ddsasd} from "../../assets/index";

import { FaFigma , FaGithub} from "react-icons/fa";

const Projects = () => {
  return (
    <section id="Projects" className="md:pt-[80px] max-sm:pt-56  ">
      <div className="  flex flex-col justify-center items-center pt-16 text-center ">
        <Title title="Visit My Portfolio " desc="My Projects" />
      </div>
      <div className="grid lg:grid-cols-3 gap-20 md:grid-cols-2">
        <Card
          image={<img src={dappp} alt="proj1"  />}
          title=" Delivery App"came
          desc="UI Design For A delivery Application  Designed Using Figma"
          icons={<FaFigma />}
        />
        <Card
          image={<img src={portfolio} alt="proj1" />}
          title=" Personal portfolio"
          desc="My Very first React portfolio , Designed and Built from scratch"
          icons={<FaGithub />}
          icon2={<FaFigma/>}
        />
        <Card
          image={<img src={fsd} alt="proj1" />}
          title=" Voting  Application"
          desc="UI Design For A delivery Application  Designed Using Figma"
          icons={<FaGithub />}
          icon2={<FaFigma />}
        />
        <Card
          image={<img src={library} alt="proj1" />}
          title=" Graphics Design"
          desc=" Graphic Designs for flyers ,posters and publishers "
          icons={<FaFigma />}
        />
        <Card
          image={<img src={LIB} alt="proj1" />}
          title="Mad_Tech Library"
          desc=" A mini online library where techies can fink and read books"
          icons={<FaFigma />}
        />
        <Card
          image={<img src={ddsasd } alt="proj1" />}
          title="E-commerse stie  "
          desc="creating a fully respnsive web application for shopping goods"
          icon2={<FaFigma />}
          icons={<FaGithub />}
        />
      </div>
    </section>
  );
};

export default Projects;
