import { Button } from ".";
import { ApproachImg, ApproachImg2 } from "../assets";

const about = () => (
  <section id="approach" className="md:px-[15rem] mt-[10rem]">
    <div className="flex flex-col justify-center xl:flex-row xl:justify-start">
      <p className="font-semibold font-poppins text-[18px] text-center xl:text-start">
        Our difference
      </p>
      <p className="font-poppins font-bold text-[40px] text-center xl:ms-[10rem] xl:w-[50%] xl:text-start">
        Disciplined. Controlled. Returns.
      </p>
      <div className="flex flex-col">
        <div className="flex justify-end">
          <p className="font-poppins font-normal text-center xl:w-[50%] xl:text-start">
            With unwavering confidence in our ability to create quality
            projects, Structura Design Co. ensures great architecture works by
            meticulously selecting projects, translating excellence into value
            for our stakeholders.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center xl:ms-[13rem]">
          <label className="font-poppins font-bold me-5 text-secondary">
            Our approach
          </label>
          <Button />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center mt-[10rem] xl:flex-row xl:justify-end">
      <img src={ApproachImg} className="mb-10 xl:h-[500px] xl:me-10" />
      <img src={ApproachImg2} />
    </div>
  </section>
);

export default about;
