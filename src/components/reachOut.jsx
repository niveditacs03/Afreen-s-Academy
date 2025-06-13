import React from "react";
import ReachOutDoctor from "../assets/images/reachOutDoctor.png";
import ConnectIcon from "../assets/icons/connect.png";

const ReachOut = () => {
  return (
    <div className="relative mt-35 max-w-6xl mx-auto">
      <div className="relative z-10 flex items-center justify-between bg-white shadow-lg rounded-3xl p-6 w-full">
        <div className="flex-1 pl-8 py-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Feel free to reach out to us
            <br />
            with any question or concerns.
          </h2>
        </div>
        <div className="flex flex-row items-center pr-8 ml-20">
          <div className="relative">
            <img 
              src={ReachOutDoctor} 
              alt="Doctor Illustration" 
              className="h-full w-full object-contain"
            />
          </div>
          
          <button className="flex items-center justify-center bg-[#7CCCAA] hover:bg-green-500 text-white font-medium rounded-full px-8 py-3 transition-all shadow-md mt-4 w-[250px] h-[60px] cursor-pointer">
            <img src={ConnectIcon} alt="Chat Icon" className="w-9 h-9 mr-2" />
            Connect With Us
          </button>
        </div>
      </div>
      <div className="absolute -bottom-12 -left-10 w-30 h-30 bg-[#B0F0A5] rounded-bl-full"></div>
    </div>
  );
};

export default ReachOut;