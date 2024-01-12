import React, { useState } from "react";
import Title from "../contact/Title";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { headerImg} from "../../assets";
import { shopImg1, shopImg11, shopImg12, shopImg13, shopImg3, shopImg5, shopImg8, shopImg9 } from "../../assets/index";

const Gallery = () => {
  const slides = [
    {url: headerImg},
    {url: shopImg1},     
    {url: shopImg13},
    {url: shopImg3},   
    {url: shopImg5},     
    {url: shopImg8},    
    {url: shopImg9},        
    {url: shopImg11},    
    {url: shopImg12},    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-12 lgl:py-20 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Gallery" des="Our Gallery" />
          </div>

          <div className="h-screen md:h-[500px] lgl:h-screen lgl: w-2/3 w-full m-auto py-16 px-1 md:px-4 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black">
              <BsChevronCompactLeft onClick={prevSlide} size={30} className="text-white hover:text-gol "/>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black">
              <BsChevronCompactRight onClick={nextSlide} size={30} className="text-white hover:text-gol"/>
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                <RxDotFilled className={`text-${slideIndex === currentIndex ? 'gol' : 'white'}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
