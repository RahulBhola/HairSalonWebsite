import React from "react";
import Title from "../components/contact/Title";
import { CiCircleCheck } from "react-icons/ci";
import {Link } from "react-router-dom";

const courses = [
  {
    title: 'Basic Skin',
    duration: '2 Months',
    topics: [
      'Fruit Facial',
      'Basic Facial',
      'Clean Up',
      'Waxing',
      'Basic Pedicure',
      'Basic Manicure',
      'Men Facial',
      'Butter Moist Facial',
      'Acne Facial',
    ],
    cost: 'INR 35000',
  },
  {
    title:'Advance Skin',
    duration: '2 Months',
    topics: [
      'Galvanic Machine',
      'Ultrasonic',
      'Squarewave',
      'High Frequency',
      'Acne Treatment',
      'Melanine Treatment',
      'Whitening Treatment',
      'Glow Treatment',
      'Rica Wax',
      'Body Polishing',
      'Adv. Manicure',
      'Adv. Pedicure',
    ], 
    cost: 'INR 35000',
  },
  {
    title: 'Basic Aesthetic',
    duration: '2 Months',
    topics: [
      'Career Planning',
      'Selling Product & Services',
      'Client Consultation',
      'Basic Product Knowledge',
      'PH Scale',
      'Cosmetic Ingredients',
      'Facial Treatments with Natural Recipes',
      'Paraffin Mask Treatment',
      'Knowledge About Machines',
      'Brushing Unit',
      'Ultrasound',
      'Vacuum Suction',
      'Eye-Treatments',
    ],
    cost: 'INR 45000',

  },
];

const SkinCourses = () => {
  return (
    <div className="w-full h-auto bg-slate-950 px-4">
      <div className="max-w-screen-xl mx-auto">
        <section
          id="brands"
          className="w-full py-20 lgl:py-20 lgl:pb-28 border-b-[1px] border-b-white"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="Academy" des="Certification Courses In Skin" />
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

export default SkinCourses;


