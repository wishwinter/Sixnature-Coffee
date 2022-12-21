import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { v4 as uuidv4 } from 'uuid';
import Equipment from "../images/Group 14098.png"
import Ingredients from "../images/iStock-944081986.png"
import Fixing from "../images/iStock-1300538486.png"




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const data =[
  {
    id: uuidv4(),
    soure: Equipment
  },
  {
    id: uuidv4(),
    soure: Ingredients 
  },
  {
    id: uuidv4(),
    soure:  Fixing 
  },
]
function Hero_image() {
  return (
    <>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(image =>(
          <SwiperSlide key={image.id} >
            <img src={image.soure}></img>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  )
}

export default Hero_image