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
      <div className="flex flex-col justify-center md:flex-row md:justify-between">
        <p className="font-poppins font-semibold">Current Projects</p>
        <h2 className="font-poppins font-bold text-[60px]">
          Explore some of our <br className="sm:block hidden" /> current
          projects
        </h2>
        <a className="flex flex-row items-center font-poppins font-semibold cursor-pointer mt-10">
          View <img src={arrowRight} />
        </a>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {projectConf.map((card) => (
          <SwiperSlide className="w-[600px] mb-10">
            <ProjectCard key={card.id} {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default projects;
