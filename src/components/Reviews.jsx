import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
const Reviews = () => {
  // copy this settings from react carousel

  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          sliderToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          sliderToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          sliderToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 bg-slate-200 text-black">
      <div className="container max-w-[1140px] mx-auto px-2 ">
        <div className="mb-10">
          <div className="text-center text-4xl font-bold text-green-500 cursor-pointer py-1">
            <h1 data-aos="fade-up">Testimonials</h1>
          </div>
          {/* all user  Testimonials*/}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                <div key={item.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-lg bg-black relative text-white">
                    {/* user images */}
                    <div className="mb-4">
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* user all data */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3 ">
                        <p className="text-xl text-slate-200 font-light">
                          {item.text}
                        </p>
                        <h1 className="text-xl font-semibold text-green-500 font-cursive2">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-green-500 text-9xl font-serif absolute top-0 right-0">
                      {" "}
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
