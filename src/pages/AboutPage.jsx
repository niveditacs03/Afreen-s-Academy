import React from "react";

//comps
import RoundCard from "../components/RoundCard";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import ReviewCard from "../components/ReviewCard";
import ReachOut from "../components/reachOut";
import FooterBar from "../components/Footer";
import SubscriptionCard from "../components/SubscriptionCard";
import ProgramCardSection from "../components/ProgramCard";
import SpecialistCardSection from "../components/SpecialistCard";

// assets
import callIcon from "../assets/icons/call.png";
import emailIcon from "../assets/icons/email.png";
import AcadIcon from "../assets/images/acad.png";
import LogoIcon from "../assets/images/aboutUs/logo.png";
import AboutUsLogo from "../assets/images/aboutUs/aboutUsHeading.png";
import Bar from "../assets/images/aboutUs/aboutUsfooter.png";
import PillBar from "../components/PillBar";

//reusable comps
const ContactItem = ({ icon, text, className }) => (
  <div className={`flex items-center gap-2 font-small ${className}`}>
    <div className="bg-[#dcdcf4] p-1 rounded-full">
      <img src={icon} alt={text.split(" ")[0]} className="w-5 h-5" />
    </div>
    <span className="text-[#2d2d84] text-xs">{text}</span>
  </div>
);

const HeaderSection = () => (
  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md w-full">
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
  <div>
    <div className="flex gap-1 bg-[#E4FFF3] flex-row gap-160">
      <div className="flex flex-col items-center ml-25 mt-20">
        <p className="text-700 text-black text-5xl font-semibold">About Us</p>
        <img src={Bar} alt="academyLogo" className="w-[200px] h-[20px]" />
        <div className="-ml-5">
          <a href="/" className="text-blue-800">Home /</a>
          <a href="/about" className="text-blue-800"> About Us</a>
        </div>
      </div>
      <img
        src={LogoIcon}
        alt="academyLogo"
        className="w-[510px] h-[270px] mt-5"
      />
    </div>
  </div>
);

const Header = () => (
  <div className="text-center flex flex-col items-center px-6 mt-10">
    <Heading type="aboutUs" />
    <p className="text-gray-600 text-[21px] leading-relaxed tracking-wide">
      We are a team of well-qualified and licensed physicians in the UAE who
      have meticulously put the study courses together for General
      <br />
      Practitioner, Family Physicians, Specialists, and Dental GP Prometric
      exams.
      <br />
      We highly focus on Concept-Based Learning, which not only helps you pass
      your exams on the first attempt but also focuses on the
      <br />
      international standards of medical practice in Gulf countries.
    </p>
  </div>
);
const SubscriptionSection = () => (
  <div id="subscription">
    <Heading type="subscription" />
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <SubscriptionCard type="subscription" />
    </div>
    <div className="flex justify-center -mt-20">
      <PillBar type="course" />
    </div>
  </div>
);

const ReviewSection = () => (
  <div className="mt-20">
    <Heading type="review" />
    <ReviewCard />
  </div>
);

const ReachOutSection = () => (
  <div>
    <ReachOut />
  </div>
);

const FooterSection = () => (
  <div>
    <FooterBar />
  </div>
);

const ProgramSection = () => (
  <div>
    <ProgramCardSection />
  </div>
);

const SpecialistSection = () => (
  <div>
    <SpecialistCardSection />
  </div>
);
const AboutPage = () => {
  return (
    <article>
      <HeaderSection />
      <NavigationSection />
      <HeroSection />
      <Header />
      <ProgramSection />
      <SpecialistSection />
      <SubscriptionSection />
      <ReachOutSection />
      <ReviewSection />
      <FooterSection />
    </article>
  );
};

export default AboutPage;
