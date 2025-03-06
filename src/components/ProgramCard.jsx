import React from "react";

// Images
import PillListContainer from "../components/Pillcard";
import Heading from "../components/Heading";
import StethImage from "../assets/images/aboutUs/steth.png";
import girlImage from "../assets/images/aboutUs/girl.png";
import graduationImage from "../assets/images/aboutUs/graduation.png";

// Icons
import graduateIcon from "../assets/icons/aboutUs/graduate.png";

const ProgramCard = () => {
  return (
    <div className="bg-[#B0F0A5] py-10 px-6 mt-20 h-[1150px]">
      <Heading type="practitioner" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-8 ml-25 transform scale-[1.08] origin-top-left">
        <div className="grid grid-cols-2 gap-5">
          <img
            src={StethImage}
            alt="Steth"
            className="w-full h-full rounded-3xl shadow-md"
          />
          <img
            src={girlImage}
            alt="Girl"
            className="w-full h-[190px] rounded-3xl shadow-md ml-1"
          />

          {/* Logo Card */}
          <div className="flex items-center bg-white rounded-3xl border-3 border-[#A0E7C5] shadow-md p-4 w-[270px] h-[100px]">
            <div className="w-[70px] h-[70px] bg-[#A0E7C5] rounded-full flex items-center justify-center mr-4">
              <img
                src={graduateIcon}
                alt="Graduation"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="ml-3 flex flex-col items-start text-left">
              <p className="text-[#51C1BF] font-bold text-[35px] leading-tight">
                20+
              </p>
              <p className="text-gray-600 text-[14px] font-semibold leading-tight">
                Detailed Subjects.
              </p>
            </div>
          </div>

          <img
            src={graduationImage}
            alt="Graduation"
            className="col-span-2 h-[350px] w-[275px] rounded-3xl shadow-md ml-73 -mt-90"
          />
        </div>

        {/* Right Side: Pill List */}
        <div>
          <PillListContainer />
        </div>
      </div>

      {/* demo */}
      <div className="bg-[#a0dc94] bg-opacity-80 rounded-2xl px-8 py-6 max-w-7xl mx-auto mt-20">
  <h3 className="text-red-500 font-bold text-left text-xl">
    DEMO:
    <div className="h-[1.5px] w-[65px] bg-gray-200 mt-1"></div>
  </h3>
  <p className="text-gray-900 text-lg text-left mt-2 leading-relaxed">
    Before subscribing to our GP study programs, we encourage you to take
    the demo test available on our study platform to understand what to
    expect from our study programs.
  </p>
</div>


    </div>
  );
};

export default ProgramCard;
