import React from 'react';
import {Link} from "react-router-dom";
import { whatsapp } from "../../assets";

function Whatsapp() {
  return (
    <div className="flex items-center fixed bottom-0 right-0 p-6 gap-3" style={{ zIndex: 6, left: "initial" }}>
        <div className="bg-green-600 text-white font-lib rounded-full pl-3 pr-3 p-2"> 
            <Link to="https://wa.me/919803922728?" target="_blank" >
                Chat With Us
            </Link>
        </div>
        <Link to="https://wa.me/919803922728?" target="_blank" >
            <img src={whatsapp} alt="whatsapp_icon" className="w-20 " />
        </Link>
    </div>
  )
}

export default Whatsapp;
