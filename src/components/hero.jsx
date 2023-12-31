import { heroimg } from "../assets";

const hero = () => (
  <section className="bg-secondary pt-24">
    <div className=" flex flex-col md:px-[35rem]">
      <h1 className="font-poppins font-bold text-[32px] text-primary px-2 text-center md:text-start md:text-[52px] md:px-0">
        Empowering Clients with Enduring Value: Structura Design Co's
        Transformative Approach to Buildings and Social Infrastructure
      </h1>
      <div className="flex justify-center md:justify-start">
        <div className="flex flex-col ">
          <p className="font-poppins font-normal text-[15px] w-full px-2 text-justify text-primary mt-10 md:w-[30rem] md:px-0">
            As an architecture firm based in the vibrant city of London,
            England, Structura Design Co. specializes in facilities across the
            capital, as well as throughout the entire United Kingdom.
          </p>
          <div className="flex md:flex-row flex-col">
            <p className="font-poppins font-normal text-[15px] w-full px-2 text-justify text-primary mt-3 md:w-[30rem] md:px-0">
              At Structura Design Co., our expertise lies in the realm of
              architectural development, with a special focus on creating
              centers, and social housing projects.
            </p>

            <div className="md:ms-16 mt-10 flex justify-center items-center">
              <label className="me-5 text-primary">View projects</label>
              <div className="flex bg-secondary p-5 rounded-full border border-primary fill-primary cursor-pointer hover:bg-primary hover:fill-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="21"
                  viewBox="0 -960 960 960"
                  width="21"
                >
                  <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end">
      <img src={heroimg} className="mt-[15.5rem]" />
    </div>
  </section>
);

export default hero;
