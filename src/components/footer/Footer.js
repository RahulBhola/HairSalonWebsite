import React from 'react'
import {Link} from "react-router-dom";
import { FaHome, FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { SiUnacademy } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    
    <div className='bg-slate-950'>
      <div className="w-full h-auto px-4">
        <div className="max-w-screen-xl mx-auto">

          <section className='w-auto lgl:w-9/12 p-4 mdl:p-6 bg-white rounded-full transform -translate-y-1/2 mx-auto '>
            <div className='grid grid-cols-2 place-content-center font-lib text-xs md:text-md mdl:text-lg'>
              <div className='font-bold pl-4  mt-2 mdl:mt-0 cursor-default'>
                <h3>Ready to get started?</h3>
                <h3>Talk to Us Today</h3>
              </div>
      
              <div className='flex items-center justify-end'>
                <Link to="https://wa.me/919803922728?" target="_blank" className='font-bold hover:text-white bg-gol rounded-full p-4 pl-8 pr-8'>Get Started</Link>
              </div>
      
            </div>
          </section>

          <div className='py-2 border-b-[1px] border-b-white  grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4'>

            <div className='font-cor xs:pb-8 cursor-default'>
              <p className="text-3xl text-gol">THE HAIR PALACE</p>
              <span className='text-white'> LONDON</span>
            </div>

            <div className='text-white '>
              <h4 className='pb-4 font-cor text-xl'>Services</h4>
              <ul className="flex flex-col gap-4 font-medium  overflow-hidden">
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                    <FaHome className='text-gol' />
                    <Link to="/home">Home</Link>
                    <span className="w-20 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                    <GrServices className='text-gol'/>
                    <Link to="/services">Services</Link>
                    <span className="w-24 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                    <TbBrandAppgallery className='text-gol'/>
                    <Link to="/brands">Brand Partners</Link>
                    <span className="w-5/12 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                    <SiUnacademy className='text-gol'/>
                    <Link to="/academy">Acandemy</Link>
                    <span className="w-24 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="flex-shrink-0 w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                    <MdOutlineShoppingCart className='text-gol'/>
                    <Link to="/e-shop">e-shop</Link>
                    <span className="w-24 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <div className='text-slate-950'>.</div>
              </ul>

            </div>

            <div className='text-white'>
              <h4 className='pb-4 font-cor text-xl'>Useful Links</h4>
              <ul className="flex flex-col gap-4 overflow-hidden">
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")} >
                    <FaFacebook className='text-gol'/>
                    Facebook
                    <span className="w-28 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")}>
                    <FaInstagram className='text-gol' />
                    Instagram
                    <span className="w-28 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" onClick={()=> window.open("https://maps.app.goo.gl/AJf3ycJNJsCmNczi8","_blank","noopener noreferrer")}>
                    <FaLocationDot className='text-gol' />
                    Location
                    <span className="w-28 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" onClick={()=> window.open("https://wa.me/919803922728?")} >
                    <FaWhatsapp className='text-gol'/>
                    WhatsApp
                    <span className="w-28 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto  text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex">
                   <IoIosContact className='text-gol'/>
                   <Link to="/contact">Contact Us</Link>
                    <span className="w-28 h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <div className='text-slate-950'>.</div>
              </ul>

            </div>

            <div className='text-white'>
              <h4 className='pb-4 font-cor text-xl'>Address</h4>
              <ul className="flex flex-col gap-4 overflow-hidden">
                <li>
                  <span className="w-auto text-gray-500  gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" >
                  Our skilled and experienced barbers are dedicated to providing you with top-notch haircuts and grooming services that leave you looking and feeling your best.
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500  gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" >
                    <FaPhoneAlt className='text-gol'/>
                    <div>Phone: +91-98039-22728, <br /> <div className='pl-14'>+91 75036-14000</div></div>
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <li>
                  <span className="w-auto text-gray-500 items-center gap-2 relative hover:text-designColor duration-300 group cursor-pointer flex" >
                    <MdOutlineEmail className='text-gol'/>
                    Email: thehairpalaceludhiana@gmail.com
                    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
                <div className='text-slate-950'>.</div>
              </ul>
            </div>

          </div>

          <div className="w-full py-10 ">
            <p className="text-center text-gray-500 text-base">© 2024. All rights reserved by Rahul Bhola.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;


