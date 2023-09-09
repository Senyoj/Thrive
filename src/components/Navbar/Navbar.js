import React from "react";
import { Link } from "react-scroll";
import { border } from "../../assets/index";
import { navLinkData } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center sticky top-0 z-10 bg-bodyColor  font-titleFont border-b-[1px] border-b-gray-600 lg:visible max-sm:invisible  ">
      <div>
        <img src={border} alt="Border" className="h-20  " />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinkData.map(({ _id, title, link }) => (
            <li
              className="text-bse font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
              key={_id}
            >
              <Link
                activeclass="active"
                to={link}
                spy={true}
                smooth={true}
                offfset={-70}
                duration={900}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
