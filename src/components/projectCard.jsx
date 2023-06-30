import { arrowRight } from "../assets";

const projectCard = ({
  image,
  title,
  subTitle,
  primaryOption,
  secondaryOptions,
  secondaryOptions2,
}) => (
  <div className="flex flex-col font-poppins">
    <img src={image} />
    <h2 className="font-bold text-[40px] mt-5">{title}</h2>
    <h3 className="font-bold text-[30px]">{subTitle}</h3>
    <div>
      <p className="font-semibold mt-5">{primaryOption}</p>
      <p className="text-slate-500">
        {secondaryOptions} <br /> {secondaryOptions2}
      </p>
    </div>
    <a className="flex flex-row items-center font-poppins font-semibold cursor-pointer mt-10">
      View <img src={arrowRight} />
    </a>
  </div>
);

export default projectCard;
