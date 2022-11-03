import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { v4 as uuidv4 } from 'uuid';



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const data =[
  {
    id: uuidv4(),
    soure:'https://sixnaturecoffee.com/backoffice/media/media-62b0506015e69.jpg'},
  {
    id: uuidv4(),
    soure: 'https://sixnaturecoffee.com/backoffice/media/media-62b050670a51f.jpg'
  },
  {
    id: uuidv4(),
    soure: 'https://sixnaturecoffee.com/backoffice/media/media-62b050bf9c003.jpg'
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