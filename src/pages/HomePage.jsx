import React, { useRef } from "react";
import Card from "../components/Card";
import RoundCard from "../components/RoundCard";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import PillBar from "../components/PillBar";
import TwinButton from "../components/TwinButton";
import SubscriptionCard from "../components/SubscriptionCard";
import DoctorCard from "../components/DoctorCard";

import callIcon from "../assets/icons/call.png";
import emailIcon from "../assets/icons/email.png";
import AcadIcon from "../assets/images/acad.png";
import HeaderIcon from "../assets/images/headerImage.png";
import CourseCard from "../components/CourseCard";
import BackgroundImage from "../assets/images/background.jpg";

const HomePage = () => {
  const scrollRef = useRef(null);
  const doctorScrollRef = useRef(null); // New ref for doctor section

  return (
    <article>
      <div
        className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm w-full"
        id="header"
      >
        {/* contact buttons */}
        <div className="flex items-center gap-8 ml-8" id="contact">
          <div className="flex items-center gap-2 text-[#8c8dc4]-300 font-small ml-5">
            <div className="bg-[#dcdcf4] p-1 rounded-full">
              <img src={callIcon} alt="Call" className="w-5 h-5" />
            </div>
            <span className="text-[#2d2d84] text-xs">
              Call Now +971545578680 (UAE)
            </span>
          </div>

          <div
            className="flex items-center gap-2 text-[#8c8dc4]-300 font-small"
            id="email"
          >
            <div className="bg-[#dcdcf4] p-1 rounded-full">
              <img src={emailIcon} alt="Email" className="w-5 h-5" />
            </div>
            <span className="text-[#2d2d84] text-xs">
              enquiries@drafreensacademy.com
            </span>
          </div>
        </div>

        {/* Round Cards */}
        <div className="flex items-center gap-4" id="buttons">
          <RoundCard type="login" title="Login" />
          <RoundCard type="Demo" title="TAKE A DEMO" />
        </div>
      </div>

      <div
        id="navBar"
        className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md w-full"
      >
        <img
          src={AcadIcon}
          alt="academyLogo"
          className="w-50 h-18 ml-8 -mt-5"
        />
        <NavBar />
        <div className="flex gap-2">
          <RoundCard type="crashCourse" title="Crash Course" />
          <RoundCard type="consultation" title="Book A Consultation" />
        </div>
      </div>
      <div>
        <div id="main-header" className="flex gap-1">
          <div className="flex justify-start items-center  pl-10 -mt-10 ml-10">
            <div id="content" className="text-left max-w-2xl">
              <h1 className="text-4xl font-bold text-[#302c84]">Welcome To</h1>

              <h1 className="text-8xl md:text-5xl font-bold text-[#5fc3a8] mt-1">
                Dr. Afreen's Academy
              </h1>
              <br />
              <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
                Your Number One Source For Prometric
              </h2>
              <h2 className="text-3xl font-semibold text-gray-900 -mt-1 leading-tight">
                For Gulf Exam Preparation
              </h2>
              <h3 className="text-lg text-gray-700 mt-2 font-medium">
                (DHA, HAAD, MOH, SMLE, OMSB, QCHP, KMLE, NHRA, PLAB Exams)
              </h3>

              <h3 className="text-lg text-gray-700 font-semibold">
                250+ Active Users. More Than 95% Success Rate
              </h3>
              <br />
              <br />
              <div className="flex justify-center items-center gap-2">
                <RoundCard type="start" title="Get Started" />
                <RoundCard type="consultation" title="Book A Consultation" />
                <RoundCard type="crashCourse" title="Crash Course" />
              </div>
            </div>
          </div>
          <img src={HeaderIcon} alt="academyLogo" className="w-250 h-155" />
        </div>
      </div>

      <br />
      {/* //study PROGRAMS */}
      <Heading type="study" />

      <div className="flex flex-col items-center p-6 relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto w-full max-w-screen-xl px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* You can add cardList and map it to get all the card components */}
          {[...Array(10)].map((_, index) => (
            <Card
              key={index}
              title={`Exam ${index + 1}`}
              content="This is an Exam."
              image="https://images.unsplash.com/vector-1739128047892-15cd29b3754a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ))}
        </div>

        {/* Using the new TwinButton component */}
        <TwinButton scrollRef={scrollRef} scrollDistance={300} />
      </div>

      {/* Other courses */}
      <div className="relative w-full h-[750px]">
        <img
          src={BackgroundImage}
          alt="background"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-[#b4eca8] opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center my-15 h-full text-white text-2xl font-bold mt-10">
          <Heading type="articles" />
          <CourseCard />
          <PillBar type="course" />
        </div>
      </div>

      {/* subscription */}
      <div id="subscription">
        <Heading type="subscription" />
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <SubscriptionCard type="subscription" />
        </div>

        {/* Doctor section with its own scroll controls */}
        <div>
          <div className="flex items-center">
            <div className="align-left ml-20">
              <Heading type="doctor" />
            </div>
            <div className="align-right ml-230 mt-40">
              <TwinButton scrollRef={doctorScrollRef} scrollDistance={300} />
            </div>
          </div>
          <DoctorCard containerRef={doctorScrollRef} />
        </div>
      </div>



    </article>
  );
};

export default HomePage;
