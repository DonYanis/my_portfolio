// src/pages/ExperienceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavbarDet from "../components/NavbarDet";
import { StarsCanvas } from "../components";
const ExperienceDetail = ({ experiences }) => {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    return <p>Experience not found</p>;
  }

  return (
    <div className='relative z-0'>
    <div className="experience-detail p-4  min-h-screen flex flex-col">
      <NavbarDet/>
      <hr />

      <div className="w-full flex flex-row items-center justify-between mt-12">
        
        <div className="w-auto">
          <h1 className="text-3xl font-bold">{experience.title}</h1>
          <p className="text-lg text-gray-500">@{experience.company_name}</p>
          <p className="text-sm text-gray-400">{experience.date}</p>
        </div>

        <div className="w-auto">
          <img src={experience.icon} alt={`${experience.company_name} logo`} className="w-16 h-16 mr-4" />
        </div>
      </div>

      <div className="skills mt-4">
        <div className=" flex flex-row flex-wrap">
          {experience.skills.map((skill, index) => (
            <span className="shiny-border mr-1 mb-2" key={index}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Description Parts */}
      <div className="parts mt-12">
        <h2 className="text-3xl font-semibold text-[#830fb9]">Missions</h2>
        {experience.parts_description.map((part, index) => (
          <div key={index} className="part mt-4">
            <h3 className="text-xl font-semibold">{part.title}</h3>
            <p className="text-gray-400">{part.desc}</p>
          </div>
        ))}
      </div>

   
      <div className="thoughts mt-4">
        <h2 className="text-3xl font-semibold text-[#830fb9]">Reflections</h2>
        <p className="text-gray-400">{experience.thoghts}</p>
      </div>
    </div>
    <StarsCanvas />
    </div>
  );
};

export default ExperienceDetail;
