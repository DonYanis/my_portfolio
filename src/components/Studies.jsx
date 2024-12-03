import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { studies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const StudyCard = ({ study }) => {
  const navigate = useNavigate();
  return (
    <VerticalTimelineElement

      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={study.date}
      iconStyle={{ background: study.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={study.icon}
            alt={study.company_name}
            className='w-[80%] h-[80%] object-contain rounded-2xl'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{study.title}</h3>
        <p onClick={() => { navigate(`/study/${study.id}`); window.scrollTo(0, 0);}}
          className=' text-[20px] font-bold cursor-pointer hover:text-blue-600 text-blue-500'
          style={{ margin: 0 }}
        >
          See More {'>>'}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {study.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {study.points.map((point, index) => (
          <li
            key={`study-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Studies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          My studies.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {studies.map((study, index) => (
            <StudyCard
              key={`study-${index}`}
              study={study}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Studies, "studies");
