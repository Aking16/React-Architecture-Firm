import { Button } from ".";
import { ApproachImg, ApproachImg2 } from "../assets";

const about = () => (
  <section id="approach" className="md:px-[15rem] mt-[10rem]">
    <div className="flex flex-col justify-center lg:flex-row lg:justify-start">
      <p className="font-semibold font-poppins text-[18px] text-center lg:text-start">
        Our difference
      </p>
      <p className="font-poppins font-bold text-[40px] text-center lg:ms-[10rem] lg:w-[50%] lg:text-start">
        Disciplined. Controlled. Returns.
      </p>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <p className="font-poppins font-normal text-center lg:w-[50%] lg:text-start">
            With unwavering confidence in our ability to create quality
            projects, Structura Design Co. ensures great architecture works by
            meticulously selecting projects, translating excellence into value
            for our stakeholders.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center lg:ms-[13rem]">
          <label className="font-poppins font-bold me-5 text-secondary">
            Our approach
          </label>
          <Button />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center mt-[10rem] lg:flex-row lg:justify-end">
      <img src={ApproachImg} className="mb-10 lg:h-[500px] lg:me-10" />
      <img src={ApproachImg2} />
    </div>
  </section>
);

export default about;
