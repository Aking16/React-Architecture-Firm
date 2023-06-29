import { heroimg } from "../assets";
import { Button } from ".";

const hero = () => (
  <section className="bg-secondary pt-24">
    <div className=" flex flex-col justify-center items-center">
      <h1 className="font-poppins font-bold text-[52px] w-[40%] text-primary leading-[4rem]">
        Empowering Clients with Enduring Value : Structura Design Co's
        Transformative Approach to Buildings and Social Infrastructure
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col justify-start items-center">
          <p className="font-poppins font-normal text-[15px] text-justify ps-[35rem] pe-[55rem] text-primary mt-10">
            As an architecture firm based in the vibrant city of London,
            England, Structura Design Co. specializes in facilities across the
            capital, as well as throughout the entire United Kingdom.
          </p>
          <p className="font-poppins font-normal text-[15px] text-justify ps-[35rem] pe-[55rem] text-primary mt-3">
            At Structura Design Co., our expertise lies in the realm of
            architectural development, with a special focus on creating centers,
            and social housing projects.
          </p>
        </div>
      </div>
      <div className="ms-[35rem]">
        <Button />
      </div>
    </div>
    <div className="flex justify-end">
      <img src={heroimg} className="mt-[15.5rem]" />
    </div>
  </section>
);

export default hero;
