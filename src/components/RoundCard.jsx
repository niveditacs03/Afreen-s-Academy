import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DemoIcon from "../assets/icons/demo.png";
import crashCourseIcon from "../assets/icons/course.png";
import consultationIcon from "../assets/icons/consultation.png";
import startIcon from "../assets/icons/start.png";

const RoundCard = (RoundCard) => {
  if (RoundCard.type === "login") {
    return (
      <div className="bg-[#20dcdc] text-white w-25 h-10 flex items-center justify-center rounded-full hover:bg-[#20c5c5] transition cursor-pointer">
        <PersonIcon className="w-4 h-4" />
        <span className="text-xs font-medium ml-1">{RoundCard.title}</span>{" "}
        {/* Small text */}
      </div>
    );
  }
  if (RoundCard.type === "Demo") {
    return (
      <div className="bg-white text-[#7cccac] w-40 h-10 flex items-center justify-center rounded-full border border-[#7cccac] hover:bg-[#7cccac] hover:text-white transition cursor-pointer mr-16">
        <img src={DemoIcon} alt="Demo Icon" className="w-9 h-9 pr-1" />
        <span className="text-xs font-medium ml-1">{RoundCard.title}</span>
      </div>
    );
  }
  if (RoundCard.type === "crashCourse") {
    return (
      <div className="bg-[#a0b4fe] text-white w-45 h-13 flex items-center justify-center rounded-full border border-transparent hover:bg-white hover:text-[#a0b4fe] hover:border-[#a0b4fe] transition cursor-pointer">
        <img
          src={crashCourseIcon}
          alt="crashCourse Icon"
          className="w-9 h-9 pr-1"
        />
        <span className="text-xs font-medium ml-1">{RoundCard.title}</span>
      </div>
    );
  }
  if (RoundCard.type === "consultation") {
    return (
      <div className="bg-[#7cccac] text-white w-55 h-13 flex items-center justify-center rounded-full border  hover:bg-white hover:text-[#7cccac] transition cursor-pointer">
        <img
          src={consultationIcon}
          alt="consultation Icon"
          className="w-8 h-8 pr-1"
        />
        <span className="text-xs font-medium">{RoundCard.title}</span>
      </div>
    );
  }

  if (RoundCard.type === "study") {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="bg-[#ffeccc] text-[#fc9404] w-55 h-10 flex items-center justify-center rounded-full">
            <span className="text-xs font-semibold ml-1">{RoundCard.title}</span>
        </div>
      </div>
    );
  }

  if (RoundCard.type === "start") {
    return (
      <div className="flex justify-center items-center">
        <div
          className="bg-[#ffeccc] text-[#fc9404] w-40 h-13 flex items-center justify-center rounded-full border  
            hover:bg-[#fc9404] hover:text-[#ffeccc] transition cursor-pointer"
        >
          <img src={startIcon} alt="start" className="w-8 h-8 pr-1" />
          <span className="text-xs font-medium">{RoundCard.title}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default RoundCard;
