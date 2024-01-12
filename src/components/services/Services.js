import React, { useState } from 'react';
import Title from '../contact/Title';
import Makeup from './Makeup';
import Spa from './Spa';
import Nail from './Nail';
import Skin from './Skin';
import HairWomen from './HairWomen';
import HairMen from './HairMen';
import Other from './Other';

const Services = () => {
  const [makeupData, setMakeupData] = useState(true);
  const [spaData, setSpaData] = useState(false);
  const [nailsData, setNailsData] = useState(false);
  const [hairWomenData, setHairWomenData] = useState(false);
  const [hairMenData, setHairMenData] = useState(false);
  const [skinData, setSkinData] = useState(false);
  const [otherData, setOtherData] = useState(false);
  
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="services"
          className="w-full py-12 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white flex flex-col items-center text-center justify-center"
        >
          <Title title="SERVICES" des="Our Services" />
          


          <div className='w-full bg-rose-900'>
            <ul className="w-full grid grid-cols-3 md:grid-cols-7">
              <li
                onClick={() =>  setMakeupData(true) &  setSpaData(false) & setNailsData(false) & setHairWomenData(false) & setHairMenData(false) & setSkinData(false) & setOtherData(false)}
                className={`${makeupData? "border-gol rounded-lg": "border-transparent"} resumeLi`}>
                MakeUp
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(true) & setNailsData(false) & setHairWomenData(false) & setHairMenData(false) & setSkinData(false) & setOtherData(false)}
                className={`${spaData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Spa
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(false) & setNailsData(true) & setHairWomenData(false) &setHairMenData(false) & setSkinData(false) & setOtherData(false)}
                className={`${nailsData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Nails
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(false) & setNailsData(false) & setHairWomenData(true) & setHairMenData(false) & setSkinData(false) & setOtherData(false) }
                className={`${hairWomenData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Hair (Women)
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(false) & setNailsData(false) & setHairWomenData(false) & setHairMenData(true) & setSkinData(false) & setOtherData(false) }
                className={`${hairMenData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Hair (Men)
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(false) & setNailsData(false) & setHairWomenData(false) & setHairMenData(false) & setSkinData(true) & setOtherData(false)}
                className={`${skinData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Skin
              </li>
              <li
                onClick={() =>  setMakeupData(false) &  setSpaData(false) & setNailsData(false) & setHairWomenData(false) & setHairMenData(false) & setSkinData(false) & setOtherData(true)}
                className={`${otherData ? "border-gol rounded-lg" : "border-transparent"} resumeLi`}>
                Others..
              </li>
            </ul>
          </div>
          

          {makeupData && <Makeup />}
          {spaData && <Spa />}
          {nailsData && <Nail />}
          {hairWomenData && <HairWomen />}
          {hairMenData && <HairMen />}
          {skinData && <Skin />}
          {otherData && <Other />}

        </section>
      </div>
    </div>
  );
}

export default Services;
