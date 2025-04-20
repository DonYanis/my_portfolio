import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Project Card Component
const ProjectCard = ({
  id,
  name,
  description,
  tags,
  images,
  source_code_link,
}) => {
  return (
    <motion.div className="mx-4">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[360px] "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={images[0]}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-5"
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description.slice(0, 200)}...
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Left Arrow Component
const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return <button className="text-[42px]" onClick={() => scrollPrev()}>{"<"}</button>;
};

// Right Arrow Component
const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return <button className="text-[42px]" onClick={() => scrollNext()}>{">"}</button>;
};

// Main Works Component
const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="react-horizontal-scrolling-menu overflow-hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              itemId={`project-${index}`} // Required for horizontal scrolling
            />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
