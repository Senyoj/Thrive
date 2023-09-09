import React from "react";
import Title from "../layout/Title";
import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";


const Resume = () => {
  const [Edu, SetEduData] = useState(true);
  const [Skill, SetSkillData] = useState(false);

  return (
    <section id="Resume" >
      <div className="flex justify-center items-center text-center pt-10">
        <Title title="My Experience " desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 text-center ">
          <li className="resumeli" onClick={() => SetEduData(true)  & SetSkillData(false) }>
            Education
          </li>
          <li className="resumeli" onClick={() => SetEduData(false) & SetSkillData(true)}>
            Professional Skills
          </li>
        </ul>
      </div>
      {Edu && <Education />}
      {Skill && <Skills/>}

    </section>
  );
};

export default Resume;
