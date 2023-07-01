import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-secondary">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-primary text-[18px] font-semibold font-poppins md:ms-[11rem]">
          STRUCTURA <br /> DESIGN CO.
        </span>

        <ul className="list-none sm:flex hidden flex-1 justify-end md:justify-start md:ms-[15rem]">
          {navLinks.map((nav) => (
            <li
              className={` ms-10 cursor-pointer font-poppins ${
                active === nav.title ? "text-blue-400" : "text-primary"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-blue-400" : "text-secondary"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
