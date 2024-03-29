import React from 'react'
import { contactImg } from "../../assets/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactLeft = () => {
  const [text] = useTypewriter({
    words: ["Smoothening.","Keratin.","Highlights.","Global Colour.", "Stylish Hair Cutting.", "Body Treatments.", "Multi Hair Colors.", "Nail Art.", "Beauty & Spa."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="bg-fuchsia-950 w-full lgl:w-[35%] h-full mb-4 p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className=" rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="uppercase font-cor text-3xl font-bold text-white">The hair palace -- <span className='text-red-500'>London</span>  </h3>
        <p className="font-lib text-gol text-lg font-normal">
        <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </p>
        <p className="text-xs xl:text-sm font-lib text-gray-400 tracking-wide">
          Our skilled and experienced barbers are dedicated to providing you with top-notch haircuts and grooming services that leave you looking and feeling your best.        </p>
        <p className="font-lib text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText text-xs xl:text-sm">+91-98039-22728, +91 75036-14000</span>
        </p>
        <p className="font-lib text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText text-xs xl:text-sm">thehairpalaceludhiana@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-base uppercase font-cor mb-4">Find us in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon text-gol" onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")} >
            <FaFacebook />
          </span>
          <span className="bannerIcon text-gol" onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")}>
            <FaInstagram />
          </span>
          <span className="bannerIcon text-gol" onClick={()=> window.open("https://maps.app.goo.gl/AJf3ycJNJsCmNczi8","_blank","noopener noreferrer")}>
            <FaLocationDot />
          </span>
          <span className="bannerIcon bg-slate-950 text-gol" onClick={()=> window.open("https://wa.me/919803922728?")}>
              <FaWhatsapp />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;