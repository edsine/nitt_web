import styled from "styled-components";
import React from "react";
import SwiperCore, { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const CustomSwiper = styled(Swiper)`
  padding-bottom: 2rem !important;
  .swiper-pagination-bullet-active-main {
    background-color: ${(props) =>
      props.pagecolor === "white" ? "#27ae60" : "#ffff"};
    font-size: 1rem;
  }
`;

const Swipers = ({ data, Component, theme }) => {
  return (
    <CustomSwiper
      pagecolor={theme}
      spaceBetween={100}
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        460: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {data.map((eachData, index) => (
        <SwiperSlide key={index}>
          <Component theme={theme} data={eachData} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Swipers;
