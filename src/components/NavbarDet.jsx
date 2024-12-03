// src/components/NavbarDet.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarDet = () => {
  const navigate = useNavigate()
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <div onClick={()=> {navigate(-1)}} className="text-secondary cursor-pointer hover:text-gray-600">Go Back </div>
        </div>

      </div>
    </nav>
  );
};

export default NavbarDet;
