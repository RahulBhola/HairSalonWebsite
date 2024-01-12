import React from "react";
import Title from "../components/contact/Title";
import { CiCircleCheck } from "react-icons/ci";
import {Link } from "react-router-dom";

const courses = [
  {
    title: 'ART OF MAKEUP COURSE',
    duration: '1 Months Level 1',
    topics: ['Makeup Theory', 'Infrastructure of Makeup Room', 'Makeup Product Knowledge', 'Personal Appearence',
            'Brush Theory','Tools of Makeup','Corrective Makeup Theory', 'Color Theory', 'Base Application Theory', 'Lipstick Application', 'Day Self Makeup','Day Party Makeup',
            'Different types of Eye Liner', 'Evening Party Makeup','Engagement Makeup', 'Groom Makeup','7 Hair Styles', 'Module Test'],
    cost: 'INR 35000',
  },
  {
    title:'Professional Makeup',
    duration: '1 Month Level 2',
    topics: ['Types of Liquid Foundation',
    'Types of Concealer',
    'Mascara',
    'Different Types of Eyeliner',
    'Bronzer',
    'Blush',
    'Base(Krylon, Makeup Studio, Pan Sticks)',
    'Lip Color',
    'Reception Makeup',
    'Brushes',
    'Sponge Types of Sponge & its Uses',
    'Bridal Makeup',
    'Pre-Wedding  Shoot Makeup',
    'Half Cut Creez',
    'Different Types of Eye Makeup (3)',
    'Smokey Makeup',
    'Hawllow Smokey',
    'Full Smokey',
    'Highlighting',
    'Module Test',
    'Semi Gilter & Pigment Application',
    'Contouring (liquid & Cream)'
  ], 
    cost: 'INR 45000',
  },
  {
    title: 'Professional International Makeup Course',
    duration: '2 Month Level 3',
    topics: [
    'Professional Color Theory Types of Skin',
    'Foundation Salon Mangement',
    'Branding & Marketing',
    'Hair Styles (30)',
    'Knowledge of International',
    'Base (Basic / HD / 3d/ Air Brush)',
    'Types of Eyeliner',
    '5 Types of Eye Makeup',
    'Classic (Basic Makeup)',
    'Half Cut Creez',
    'Full Cut Creez',
    'Full Smokey',
    'Hallow Smokey',
    '2 Types of Eye Maakeup & Student Choice',
    'Portfolio',
    'Parkeeza Makeup',
    'Jodha Makeup',
    'Christian Makeup',
    'Punjabi Makeup',
    'Royal Traditional',
    'Air Brush Makeup',
    '1 Month Internship',
    'Modeule Test'
    ],
    cost: 'INR 45000',

  },
];

const MakeUpCourses = () => {
  return (
    <div className="w-full h-auto bg-slate-950 px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Academy" des="Certification Courses in Make Up" />
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

export default MakeUpCourses;

