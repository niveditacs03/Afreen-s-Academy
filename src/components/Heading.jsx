import React from "react";
import RoundCard from "./RoundCard";

// Configuration object for different heading types
const HEADING_CONFIGS = {
  study: {
    title: "STUDY PROGRAMS",
    heading: "PROGRAMS FOR GENERAL PRACTITIONERS",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-10"
  },
  articles: {
    title: "OTHER COURSES",
    heading: "A BROAD SELECTION OF COURSES",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-5"
  },
  subscription: {
    title: "SUBSCRIPTION",
    heading: "HOW TO SUBSCRIBE",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-30"
  },
  doctor: {
    title: "OUR TEAM",
    heading: "MEET OUR DOCTORS",
    showDivider: false,
    cardType: "doctor",
    className: "py-6 rounded-lg mt-30"
  },
  features: {
    title: "FEATURES",
    heading: "WHAT WE OFFER IN OUR COURSE",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-30"
  },
  plan: {
    title: "STANDARD PLANS",
    heading: "CHOOSE A PLAN THAT'S FOR YOU",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-10"
  }
};

const DividerWithCircle = () => (
  <div style={{ display: "flex", alignItems: "center", width: "25%", margin: "0 auto" }}>
    <div style={{ flex: 1, height: "1px", backgroundColor: "black" }}></div>
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "#08ac2c",
        borderRadius: "50%",
        margin: "0 2px",
      }}
    ></div>
    <div style={{ flex: 1, height: "1px", backgroundColor: "black" }}></div>
  </div>
);

const Heading = ({ type }) => {
  // Get configuration based on type, with fallback to prevent errors
  const config = HEADING_CONFIGS[type] || HEADING_CONFIGS.study;
  
  return (
    <div className={config.className}>
      <RoundCard type={config.cardType} title={config.title} />
      <h1 className="text-4xl font-bold my-6 text-[#333]">{config.heading}</h1>
      {config.showDivider && <DividerWithCircle />}
    </div>
  );
};

export default Heading;