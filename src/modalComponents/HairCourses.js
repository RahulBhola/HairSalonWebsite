import React from "react";
import Title from "../components/contact/Title";
import { CiCircleCheck } from "react-icons/ci";
import {Link} from "react-router-dom";


const courses = [
  {
    title: 'Certificate course in hair',
    duration: '2 Months Level 1',
    topics: ['Hair Trichology', 'Hair & Scalp Disorders', 'Alopecia', 'Scap Analyze with Derma'],
    cost: 'INR 35000',
  },
  {
    title:'Advance Certificate Course In Hair',
    duration: '2 Months Level 2',
    topics: ['Personal Grooming',
    'Professional Ethics',
    'Class & Interview Sessions',
    'Hygiene & Sanitation',
    'Soft Skill',
    'Different Types of Blow Dryer',
    'Advance Hair Cuts',
    'Advance Hair Coloring & PH Theory',
    'Rebonding',
    'Advance Hair Treatments',
    'Scalp & Hair Analyse with Digital',
    'Machines Advance Hair Styling',], 
    cost: 'INR 45000',
  },
  {
    title: 'Advance Diploma In Hair Technology',
    duration: '10 days Level 3',
    topics: [
    'Theory & Demo of Hair Cuts',
    'Advance Hair Coloring',
    '3D Coloring',
    'Ombre',
    'Balyage',
    'Straight Therapy',
    'Keratin',
    'Smoothening',
    'Advance Hair Treatment',
    'Salon Management Class',
    'Module Test',
    ],
    cost: 'INR 45000',

  },
];

const HairCourses = () => {
  return (
    <div className="w-full h-auto bg-slate-950 px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Academy" des="Certification Courses in Hair" />
          </div>      
          
          <div className="grid grid-cols-1 lgl:grid-cols-3 gap-5 xl:gap-10 p-0 xl:p-10">
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

export default HairCourses;
