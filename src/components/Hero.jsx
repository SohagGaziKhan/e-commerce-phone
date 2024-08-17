import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const hereProducts = [
    {
      id: 1,
      img: "https://cdn.thewirecutter.com/wp-content/media/2024/01/bestiphonecases-2048px-8540-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/fSAW9-pyKkk/maxresdefault.jpg",
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/GHZwRPskGc4/maxresdefault.jpg",
    },
    {
      id: 4,
      img: "https://bgr.com/wp-content/uploads/2023/09/iphone-15-pro-max-1.jpg?quality=82&strip=all&w=1020&h=574&crop=1",
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/otomCbnwsv0/maxresdefault.jpg",
    },
    {
      id: 6,
      img: "https://beebom.com/wp-content/uploads/2024/01/Vivo-X100-Series-Launched-in-India.jpg",
    },
  ];
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="bg-black/65 text-white">
      <div className="flex justify-center items-center max-w-[1140px] mx-auto py-10">
        <Slider {...settings} className="w-[1000px] h-[600px] mt-[30px]">
          {hereProducts.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center w-full h-full rounded-md"
            >
              <img
                src={item.img}
                alt={item.id}
                className="object-contain max-w-full rounded-md max-h-full cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
