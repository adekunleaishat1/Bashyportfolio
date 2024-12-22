
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (
    <div>
    <div className="max-w-[1200px] mx-auto py-4  px-4  bg-[#56636e23]">
      <Slider {...settings}>
          {images.map((img,i)=>(
            <>
            <div key={i} className=" w-[40px]">
            <img className="w-full"  src={img} alt={`slide-${i}`} />
            </div>
            </>
        ))}
      </Slider>
    </div>
    </div>
    
  )
}

export default Carousel