import React from 'react'
import logo1 from "../assets/ub 1.png";
import logo2 from "../assets/agaweed.png";
import logo3 from "../assets/gazl.png";

const Footer = () => {
  return (
    <div className="w-full max-md:h-[20vh] h-[30vh] bg-[#73614A] bottom-0 mb-0">
    <h1 className="text-white text-4xl pr-7 font-[800] mr-5 pt-5 text-right ">
      شركاء النجاح{" "}
    </h1>
    <div className="max-md:h-[10vh] h-[20vh] flex flex-row-reverse  items-baseline justify-start pr-10">
      <img
        src={logo1}
        className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
        alt="Logo1"
      />
      <img
        src={logo2}
        className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
        alt="Logo2"
      />
      <img
        src={logo3}
        className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
        alt="besha"
      />
    </div>
  </div>
  )
}

export default Footer