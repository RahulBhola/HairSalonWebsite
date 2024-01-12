import React from 'react';
import Title from '../contact/Title';


const Location = () => {
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-12 lgl:py-20 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Location" des="Visit Us" />
          </div>

          <div className="flex justify-center items-center pb-12">
            <iframe
                className="w-full h-96 md:h-80 lg:h-96 border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.4136390706103!2d75.83723227562683!3d30.875087674515854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83ebea0dccc9%3A0x2b4ab1ac4f38a521!2sThe%20Hair%20Palace%20Salon%2C%20Ludhiana!5e0!3m2!1sen!2sin!4v1704540130853!5m2!1sen!2sin"
                width="800"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          


          </section>
      </div>
    </div>
  )
}

export default Location;
