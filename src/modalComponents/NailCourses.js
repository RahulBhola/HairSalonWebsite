import React from "react";
import Title from "../components/contact/Title";
import { CiCircleCheck } from "react-icons/ci";
import {Link } from "react-router-dom";

const courses = [
  {
    title: 'Basic Nail Extension course',
    duration: '15 Days',
    topics: [
      'Nail Anatomy',
      'Nail Theory',
      'Polish & French Application',
      'Nail Preparation',
      'Gel',
      'Acrylic',
      'Clear Gel French Builder',
      'Glitter',
      'Reverse French',
      'Product Knowledge',
      'Removal with buffer'
    ],
    cost: 'INR 25000',
  },
  {
    title:'Nail Art Course',
    duration: '20 Days',
    topics: [
      'Basic Character with Nail Art Pens',
      'Nail Paint Application',
      'Glitter Work',
      'Accessory Work',
      'Foil Work',
      'Sticker Work',
      'Water Decals',
      'Dry Manicure',
      'Nail Preparation',
      'Marble Work',
      'Newshapur Art',
      'Nail Stencils',
      'Sponge Work',
      'Brush Work with acrylic'
    ], 
    cost: 'INR 30000',
  },
  {
    title: 'Advance Nail Extension Course',
    duration: '25 Days',
    topics: [
      'Nail Anatomy',
      'Nail Extension Theory',
      'Gel(Permanent Nail Paint)',
      'Gel (2D Art with Coloured Gels)',
      'Acrylic - 3D Art with Coloured Powder',
      'Gel & Acrylic Refills',
      'Gel & Acrylic Removal',
      'Mylar / Stones / Dry Flower / Crystal etc.',
      'Different types of Nail Shape',
      'Sculpting form Nail Extensions',
      'Advance Nail Art',
      'Drill Machine',
    ],
    cost: 'INR 25000',

  },
];

const NailCourses = () => {
  return (
    <div className="w-full h-auto bg-slate-950 px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Academy" des="Certification Course in Nail" />
          </div>      
          
          <div className="grid  grid-cols-1 lgl:grid-cols-3 gap-5 xl:gap-10 p-0 xl:p-10">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-r from-fuchsia-950 to-gol p-5 xl:p-12">
                <div className="text-3xl font-bold uppercase">{course.title}</div>
                <div className="py-8">
                  <div className="font-bold">Duration: {course.duration}</div>
                  <ul>
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center ml-2 gap-1">
                        <CiCircleCheck className="text-designColor" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pb-10">
                  <div className="uppercase text-zinc-800 font-bold">Cost</div>
                  <div className="text-3xl ml-6">{course.cost}</div>
                </div>
                <Link to="https://wa.me/919803922728?" target="_blank" >
                <button className="text-white uppercase purchase bg-slate-950 text-gol rounded p-4 ">
                  Purchase Now
                </button>
                </Link>
              </div>
            ))}
          </div>


        </section>
      </div>
    </div>
  );
};

export default NailCourses;

