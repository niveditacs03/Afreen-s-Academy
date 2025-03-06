import React from "react";
import specialistImage from "../assets/images/aboutUs/specialist.png";
import DividerWithCircle from "./Circle";
import Penicon from "../assets/icons/aboutUs/pen.png";

const SpecialistCardSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#FB9F9E] py-10 px-6 h-[550px] w-[1300px] flex justify-center items-center rounded-3xl">
        <div className="bg-white py-10 px-6 h-[510px] w-[1250px] flex justify-between items-center rounded-3xl gap-x-10">
          {/* Left: Image */}
          <img
            src={specialistImage}
            alt="specialist"
            className="w-[595px] h-[400px] object-cover rounded-lg"
          />

          {/* Right: Text Section */}
          <div className="flex flex-col items-center text-center w-[600px]">
            <h1 className="text-5xl font-semibold text-black leading-tight">
              SPECIALIST & DENTAL <br /> GP EXAMS
            </h1>
            <DividerWithCircle/>
            <br />
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
            We also provide Specialist exam & Dental GP examcourses
            <br />
            which has preparation materials required for Prometric exams.
            </p>
            <br />
            <p className="text-red-500 text-lg">
            We'll be launching it soon. Stay tuned or notification
            </p>
          <button className="bg-[#58e4c4] text-white rounded-full px-4 py-2 flex items-center gap-2 font-semibold text-lg hover:text-black cursor-pointer mt-10">
           <img src={Penicon}  className="w-10 h-10" alt="icon" />
           Enroll now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCardSection;
