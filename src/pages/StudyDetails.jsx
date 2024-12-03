import React from "react";
import { useParams } from "react-router-dom";
import NavbarDet from "../components/NavbarDet";
import { StarsCanvas } from "../components";

const StudyDetails = ({ studies }) => {
  const { id } = useParams();
  const study = studies.find((exp) => exp.id === id);

  if (!study) {
    return <p>study not found</p>;
  }

  return (
    <div className='relative z-0'>
    
    <div className="study-detail p-4 min-h-screen flex flex-col">
      <NavbarDet/>
      <hr />

      <div className="w-full flex flex-row items-center justify-between mt-12">
        
        <div className="w-auto">
          <h1 className="text-3xl font-bold">{study.title}</h1>
          <p className="text-lg text-gray-500">@{study.company_name}</p>
          <p className="text-sm text-gray-400">{study.date}</p>
        </div>

        <div className="w-auto">
          <img src={study.icon} alt={`${study.company_name} logo`} className="w-16 h-16 mr-4" />
        </div>
      </div>

      <div className="skills mt-4">
        <div className=" flex flex-row flex-wrap">
          {study.skills.map((skill, index) => (
            <span className="shiny-border mr-1 mb-2" key={index}>{skill}</span>
          ))}
        </div>
      </div>

   
      <div className="thoughts mt-5 p-6">
        <p className="text-gray-400">{study.thoghts}</p>
      </div>
    </div>
    <StarsCanvas />
    </div>
  );
};

export default StudyDetails;
