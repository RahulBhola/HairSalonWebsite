import React from 'react'
import { FaInstagram, FaFacebook , FaWhatsapp} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Media = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-8 lgl:gap-5 justify-between">
        <div>
          <h2 className="uppercase font-cor mb-4 text-white">
            Find US ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon bg-slate-950 text-gol" onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")} >
              <FaFacebook />
            </span>
            <span className="bannerIcon bg-slate-950 text-gol" onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")}>
              <FaInstagram />
            </span>
            <span className="bannerIcon bg-slate-950 text-gol" onClick={()=> window.open("https://maps.app.goo.gl/AJf3ycJNJsCmNczi8","_blank","noopener noreferrer")}>
              <FaLocationDot />
            </span>
            <span className="bannerIcon bg-slate-950 text-gol" onClick={()=> window.open("https://wa.me/919803922728?")}>
              <FaWhatsapp />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-cor mb-4 text-white">
            DOWNLOAD OUR BROCHURE
          </h2>
          <div className="flex gap-4">
            <a className="bannerDownload bg-slate-950 font-mon text-gol" href="brochure.pdf" download=".pdf">
              Download
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media;