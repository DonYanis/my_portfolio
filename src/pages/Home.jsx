import React from "react";
import { Navbar, Hero, About, Experience, Tech, Works,Studies, Certifs, Feedbacks, Contact, StarsCanvas } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Studies/>
      <Certifs/>
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
