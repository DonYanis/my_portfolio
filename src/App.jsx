import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home, ExperienceDetails,CertificationDetails, ProjectDetails, StudyDetails} from './pages'
import { experiences, projects, certifications, studies } from "./constants";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience/:id" element={<ExperienceDetails experiences={experiences} />} />
        <Route path="/project/:id" element={<ProjectDetails projects={projects}/>} />
        <Route path="/certification/:id" element={<CertificationDetails certifications={certifications} />} />
        <Route path="/study/:id" element={<StudyDetails studies={studies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
