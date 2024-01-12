import React from 'react';
import Title from '../contact/Title';
import { brand1, brand2, brand3, brand4 } from '../../assets';

const Brands = () => {
  return (
    <div className="w-full h-auto bg-slate-950 text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <section id="brands" className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white">

          <div className="flex justify-center items-center text-center">
            <Title title="Brands" des="Our Brands" />
          </div>

          <div className='flex flex-wrap'>
            <img className="bg-slate-200 sm:w-1/2 md:w-1/4" src={brand1} alt="brand1"/>
            <img className="bg-slate-300 sm:w-1/2 md:w-1/4" src={brand2} alt="brand2"/>
            <img className="bg-slate-400 p-8 lg:p-20 sm:w-1/2 md:w-1/4" src={brand3} alt="brand3"/>
            <img className="bg-slate-500 p-8 lg:p-20 sm:w-1/2 md:w-1/4" src={brand4} alt="brand4"/>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Brands;
