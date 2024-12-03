import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";


const CertifCard = ({
  name,
  provider,
  image,
  skills,
  link
}) => {

  return (
    <motion.div >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450, }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>by {provider}</p>
        </div>

        <div>
        <p className='mt-2 text-blue-600 text-[14px] cursor-pointer hover:text-blue-900' onClick={()=>{window.open(link)}}>Verify {'>>'} </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <p
              key={`${name}-${skill}`}
              className={`text-[14px] `}
            >
              #{skill}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifs = () => {
  return (
    < >
      <motion.div>
        <p className={`${styles.sectionSubText} `}>My career</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The certifications I've earned in AI, Data Science, and Web Development 
          demonstrate my commitment to continuous learning and professional growth. 
          Each certification reflects my deep understanding of key concepts and 
          technologies in these fields, such as machine learning, data analysis,
           and web development frameworks. 
           </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        
      {certifications.map((certif, index) => (
          <CertifCard key={`certif-${index}`} index={index} {...certif} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifs, "");
