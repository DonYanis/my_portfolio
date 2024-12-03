import React from "react";
import { useParams } from "react-router-dom";
import NavbarDet from "../components/NavbarDet";
import { github } from "../assets";
import { StarsCanvas } from "../components";

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='relative z-0'>
    <div className="project-detail  p-4  min-h-screen flex flex-col">
      <NavbarDet/>
      <hr />


      <div className="w-full flex flex-row items-center justify-between mt-12">  
        <div className="w-auto">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div className="flex items-center">
            <img src={github} className="w-8" />
            <p onClick={()=>{window.open(project.source_code_link)}} className="cursor-pointer font-semibold text-lg hover:text-blue-800">Source Code</p>
          </div>
        </div>
      </div>


      <div className="skills mt-4">
        <div className=" flex flex-row flex-wrap">
          {project.skills.map((skill, index) => (
            <span className="shiny-border mr-1 mb-2" key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="parts mt-12">
        <h2 className="text-3xl font-semibold text-[#830fb9]">Description</h2>
          <div className="part mt-4">
            <p className="text-gray-400">{project.description}</p>
          </div>
      </div>

      <div className="thoughts mt-4">
        <h2 className="text-3xl font-semibold text-[#830fb9]">Reflections</h2>
        <p className="text-gray-400">{project.thoghts}</p>
      </div>


            {project.images.map((image, index)=>(
              <img src={image} alt={`${project.title} ${index} thumbnail`} key={index} className="w-full max-w-[600px] h-auto rounded-md block m-auto mt-3" />
            ))}
    </div>
    <StarsCanvas />
    </div>
  );
};

export default ProjectDetail;
