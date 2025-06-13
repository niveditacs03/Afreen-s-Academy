import React from "react";
import RoundCard from "./RoundCard";


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
    className: "text-center py-6 rounded-lg mt-25"
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
  },
  review: {
    title: "TESTIMONIALS",
    heading: "WHAT DOCTORS SAY ABOUT US",
    showDivider: true ,
    cardType: "study",
    className: "text-center py-6 rounded-lg"
  },
  aboutUs: {
    title: "No title",
    heading:"ONLINE PREPARATORY COURSES FOR",
    subHeading:"GENERAL PRACTITIONERS / SPECIALISTS / DENTISTS.",
    showDivider: true,
    cardType: "study",
    className: "text-center py-6 rounded-lg mt-10"
  },
  practitioner:{
    title:"NO TITLE",
    heading:"GENERAL PRACTITIONER STUDY PROGRAMS AT",
    subHeading:"DR AFREEN’S ACADEMY PROVIDES ACCESS TO",
    showDivider : true,
    cardType:"study",
    className:"text-center py-6 rounded-lg mt-4"
  }
};

const DividerWithCircle = () => (
  <div style={{ display: "flex", alignItems: "center", width: "25%", margin: "0 auto" }}>
    <div style={{ flex: 1, height: "1px", backgroundColor: "gray" }}></div>
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "#08ac2c",
        borderRadius: "50%",
        margin: "0 2px",
      }}
    ></div>
    <div style={{ flex: 1, height: "1px", backgroundColor: "gray" }}></div>
  </div>
);

const Heading = ({ type }) => {
  
  const config = HEADING_CONFIGS[type] || HEADING_CONFIGS.study;
  
  return (
    <div className={config.className}>
     { !(type ==="aboutUs" || type==="practitioner") && <RoundCard type={config.cardType} title={config.title} />}
      <h1 className="text-5xl font-semibold my-6 text-[#333]">{config.heading}</h1>
      {(type==="aboutUs" || type==="practitioner") && <h3 className="text-4xl font-normal my-6 text-[#333]">{config.subHeading}</h3>}
      {config.showDivider && <DividerWithCircle />}
    </div>
  );
};

export default Heading;