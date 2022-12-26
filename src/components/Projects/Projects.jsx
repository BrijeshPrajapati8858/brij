import React, { useContext } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import FoodDelivery from "../../projectsImage/food-delivery.png";
import Local from "../../projectsImage/local-business.png";
import weather from "../../projectsImage/weather-app.png";
import coffee from "../../projectsImage/coffee-shop.png";
import page from "../../projectsImage/Landing-page.png";
import myPortfolio from "../../projectsImage/myportfolio.png";
import portfolio from "../../projectsImage/portfolio.png";
import Library from "../../projectsImage/Library.png";
import Flower from "../../projectsImage/flower-shop.png"


import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="projects">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>All these projects has been created using html,
    css,
    scss,
    bootsrtap,
    JAVASCRIPT,
    react js,
    next js,
    redux js,
    WORDPRESS,
    w3.css,
    MUI,
    tailwind,    
    REST API,
    Email Js,
    NODE JS,
    EXPRESS JS,
    MONGODB,
    MONGOOSE,</span>

      {/* slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={false}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={FoodDelivery} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Local} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coffee} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={page} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={myPortfolio} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={Library} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={Flower} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
