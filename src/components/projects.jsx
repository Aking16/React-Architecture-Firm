import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { projectConf } from "../constants";
import { ProjectCard } from ".";
import { arrowRight } from "../assets";

const projects = () => {
  return (
    <section id="projects" className="md:px-[15rem] mt-[10rem]">
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start">
        <p className="font-poppins font-semibold text-[15px]">
          Current Projects
        </p>
        <h2 className="font-poppins font-bold text-[60px] text-center xl:text-start">
          Explore some of our <br className="sm:block hidden" /> current
          projects
        </h2>
        <a className="flex flex-row items-start font-poppins font-semibold text-[15px] cursor-pointer border-b-2 border-black h-full mt-5 xl:mt-0">
          View All <img src={arrowRight} />
        </a>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mt-10"
      >
        {projectConf.map((card) => (
          <SwiperSlide className="w-full mb-10 md:w-[600px]">
            <ProjectCard key={card.id} {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default projects;
