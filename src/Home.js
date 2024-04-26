import React from "react";
import Navheader from "./components/Navheader";

import HomeComp1 from "./components/HomeComp1";
import HomeComp2 from "./components/HomeComp2";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className=" w-full bg-[#CEB99E]">
      <Navheader />
      <div className="pb-10 bg-white">
        <HomeComp1 />
      </div>{" "}
      <div className="h-[10vh] my-[10px]" />
      <HomeComp2 />
      <div className="w-full h-[20vh] "/>
      <Footer/>
    </div>
  );
};

export default Home;
