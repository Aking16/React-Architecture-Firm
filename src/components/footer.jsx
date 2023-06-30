import { useState } from "react";
import { navLinks } from "../constants";
import { arrowRight } from "../assets";

const footer = () => {
  const [active, setActive] = useState("Home");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary md:px-[15rem] mt-[10rem]">
      <div className="flex flex-col flex-wrap justify-center items-center pt-[5rem] font-poppins md:flex-row md:justify-between md:items-start">
        <div className="text-primary">Explore</div>
        <ul className="list-none flex flex-col justify-center items-center md:justify-start md:items-start">
          {navLinks.map((nav) => (
            <li
              className={`cursor-pointer text-[30px] font-bold mb-5 ${
                active === nav.title ? "text-blue-400" : "text-primary"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col text-primary justify-center items-center mt-5 md:justify-start md:items-start md:mt-0">
          <h2>Get in touch</h2>
          <p className="mt-10">info@structuradesignco.com</p>
          <p className="underline">+44 XX XXXX XXXX</p>
          <p className="mt-5">
            14th Elizabeth Street <br /> London, England
          </p>

          <form className="mt-10">
            <h2>Stay in the loop</h2>
            <div className="relative z-0 w-full mt-5 md:w-[15rem]">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center font-poppins text-primary mt-10">
        <p>Copyright &copy; {currentYear} Structura Design Co.</p>
        <a
          className="hover:text-blue-400 cursor-pointer"
          href="https://docs.github.com/en/site-policy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default footer;
