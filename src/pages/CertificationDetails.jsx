
import React from "react";
import { useParams } from "react-router-dom";
import NavbarDet from "../components/NavbarDet";
import { StarsCanvas } from "../components";
const CertificationDetails = ({ certifications }) => {
  const { id } = useParams();
  const certification = certifications.find((cert) => cert.id === id);

  if (!certification) {
    return <p>Certification not found</p>;
  }

  return (
    <div className='relative z-0'>
    <div className="certification-detail p-4  min-h-screen flex flex-col">
      <NavbarDet/>
      <hr />

      <div className="w-full flex flex-row items-center justify-between mt-12">
        
        <div className="w-auto">
          <h1 className="text-3xl font-bold">{certification.name}</h1>
          <p className="text-lg text-gray-500">from {certification.provider}</p>
        </div>
      </div>

      <div className="skills mt-4">
        <div className=" flex flex-row">
          {certification.skills.map((skill, index) => (
            <span className="shiny-border mr-1" key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <img src={certification.image} alt={`${certification.title} thumbnail`} className="w-full max-w-[600px] h-auto rounded-md block m-auto" />

   
      <div className="thoughts mt-4">
        <h2 className="text-3xl font-semibold text-[#830fb9]">Reflections</h2>
        <p className="text-gray-400">{certification.description}</p>
      </div>
    </div>
    <StarsCanvas />
    </div>
  );
};

export default CertificationDetails;
