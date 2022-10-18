import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        // ここの指定でナビゲーションボタンのcss要素と紐付ける
        navigation={{
          prevEl: "#button_prev",
          nextEl: "#button_next",
        }}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.543life.com/wp/wp-content/uploads/2020/04/20200430main-670x670.jpg" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div
        id="button_prev"
        className="swiper-button-prev"
        style={{ color: "orange" }}
      ></div>
      <div
        id="button_next"
        className="swiper-button-next"
        style={{ color: "orange" }}
      ></div>
    </>
  );
}
