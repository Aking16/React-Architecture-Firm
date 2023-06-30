import { Button } from ".";
import { ArchitectureImg, ArchitectureImg2 } from "../assets";

const about = () => (
  <section id="architecture" className="md:px-[15rem] mt-[10rem]">
    <div className="flex flex-col justify-center xl:flex-row xl:justify-start">
      <p className="font-semibold font-poppins text-[18px] text-center xl:text-start">
        Investments
      </p>
      <div className="flex flex-col justify-center xl:justify-start">
        <p className="font-poppins font-bold text-[40px] text-center xl:ms-[10rem] xl:w-[70%] xl:text-start">
          From start to finish, our meticulous project management minimizes risk
          and assures customers' peace of mind. We oversee each step, ensuring
          successful completion.
        </p>
        <div className="mt-10 flex justify-center items-center xl:ms-[10rem] xl:justify-start">
          <label className="font-poppins font-bold me-5 text-secondary">
            About architecture
          </label>
          <Button />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center mt-[10rem] xl:flex-row xl:justify-end">
      <img src={ArchitectureImg} />
      <img
        src={ArchitectureImg2}
        className="mt-10 xl:object-scale-down object-top xl:ms-10 xl:mt-0"
      />
    </div>
  </section>
);

export default about;
