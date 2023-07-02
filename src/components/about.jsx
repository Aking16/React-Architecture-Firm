import { Button } from ".";
import { aboutimg } from "../assets";

const about = () => (
  <section id="about" className="md:px-[15rem] mt-10">
    <div className="flex flex-col justify-center xl:flex-row xl:justify-start">
      <p className="font-semibold font-poppins text-[18px] text-center xl:text-start">
        Our mission
      </p>
      <div className="flex flex-col justify-center xl:justify-start">
        <p className="font-poppins font-bold text-[32px] text-center xl:ms-[10rem] xl:w-[70%] xl:text-start md:text-[40px]">
          Our commitment is to ensure the consistent delivery of housing and
          apartments for our valued clients through development endeavors.
        </p>
        <div className="mt-10 flex justify-center items-center xl:ms-[10rem] xl:justify-start">
          <label className="font-poppins font-bold me-5 text-secondary">
            Get to know us
          </label>
          <Button />
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-[10rem] xl:justify-end">
      <img src={aboutimg} />
    </div>
  </section>
);

export default about;
