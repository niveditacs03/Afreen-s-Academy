import React, { useRef } from "react";

// Components
import Card from "../components/Card";
import RoundCard from "../components/RoundCard";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import PillBar from "../components/PillBar";
import TwinButton from "../components/TwinButton";
import SubscriptionCard from "../components/SubscriptionCard";
import DoctorCard from "../components/DoctorCard";
import CourseCard from "../components/CourseCard";
import CourseFeatures from "../components/CourseFeatures";
import PlanCards from "../components/PlanCard";
import ReviewCard from "../components/ReviewCard";
import ReachOut from "../components/reachOut";
// Assets
import callIcon from "../assets/icons/call.png";
import emailIcon from "../assets/icons/email.png";
import AcadIcon from "../assets/images/acad.png";
import HeaderIcon from "../assets/images/headerImage.png";
import BackgroundImage from "../assets/images/background.jpg";
import CouponIcon from "../assets/icons/coupon.png";

// Reusable components
const ContactItem = ({ icon, text, className }) => (
  <div className={`flex items-center gap-2 font-small ${className}`}>
    <div className="bg-[#dcdcf4] p-1 rounded-full">
      <img src={icon} alt={text.split(" ")[0]} className="w-5 h-5" />
    </div>
    <span className="text-[#2d2d84] text-xs">{text}</span>
  </div>
);

const HeaderSection = () => (
  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm w-full">
    <div className="flex items-center gap-8 ml-8">
      <ContactItem
        icon={callIcon}
        text="Call Now +971545578680 (UAE)"
        className="ml-5"
      />
      <ContactItem icon={emailIcon} text="enquiries@drafreensacademy.com" />
    </div>
    <div className="flex items-center gap-4">
      <RoundCard type="login" title="Login" />
      <RoundCard type="Demo" title="TAKE A DEMO" />
    </div>
  </div>
);

const NavigationSection = () => (
  <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md w-full">
    <img src={AcadIcon} alt="academyLogo" className="w-50 h-18 ml-8 -mt-5" />
    <NavBar />
    <div className="flex gap-2">
      <RoundCard type="crashCourse" title="Crash Course" />
      <RoundCard type="consultation" title="Book A Consultation" />
    </div>
  </div>
);

const HeroSection = () => (
  <div className="flex gap-1">
    <div className="flex justify-start items-center pl-10 -mt-10 ml-10">
      <div className="text-left max-w-2xl">
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
);

const CardScrollSection = ({ scrollRef }) => (
  <div className="flex flex-col items-center p-6 relative">
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto w-full max-w-screen-xl px-4 scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Use map to render multiple cards */}
      {Array.from({ length: 10 }, (_, index) => (
        <Card
          key={index}
          title={`Exam ${index + 1}`}
          content="This is an Exam."
          image="https://images.unsplash.com/vector-1739128047892-15cd29b3754a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      ))}
    </div>
    <TwinButton scrollRef={scrollRef} scrollDistance={300} />
  </div>
);

const BackgroundSection = () => (
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
);

const DoctorSection = ({ doctorScrollRef }) => (
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
);

const SubscriptionSection = () => (
  <div id="subscription">
    <Heading type="subscription" />
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <SubscriptionCard type="subscription" />
    </div>
  </div>
);

const FeaturesSection = () => (
  <div id="features">
    <Heading type="features" />
    <CourseFeatures />
  </div>
);

const PlanSection = () => (
  <div id="plan">
    <Heading type="plan" />
    <PlanCards />
  </div>
);

const CouponSection = () => (
  <div className="flex justify-center items-center min-h-screen -mt-60">
    <div id="coupon" className="shadow-md w-[500px] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mt-7 w-auto">
        <img src={CouponIcon} alt="coupon" className="w-[60px] h-[50px]" />
        <h2>COUPON CODE APPLIED TO ALL</h2>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-full ml-5 hover:bg-orange-600">
          APPLY
        </button>
      </div>
      <div>
        <p className="flex items-center justify-center text-blue-900 text-semibold text-center">
          Have a referral code?
        </p>
      </div>
    </div>
  </div>
);


const ReviewSection = () => (
  <div>
    <Heading type="review" />
    <ReviewCard/>
  </div>
);

const ReachOutSection =() => (
 <div>
   <ReachOut/>
 </div>
);
// Main component
const HomePage = () => {
  const coursesScrollRef = useRef(null);
  const doctorScrollRef = useRef(null);

  return (
    <article>
      <HeaderSection />
      <NavigationSection />
      <HeroSection />
      <br />

      <Heading type="study" />
      <CardScrollSection scrollRef={coursesScrollRef} />

      <BackgroundSection />

      <SubscriptionSection />
      <DoctorSection doctorScrollRef={doctorScrollRef} />
      <FeaturesSection />
      <PlanSection />
      <CouponSection />
      <ReviewSection />
      <ReachOutSection />
    </article>
  );
};

export default HomePage;
