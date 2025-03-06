import React, { useState } from "react";

const PillList = [
  {
    title: "PROMETRIC MCQ",
    content:
      "More than 5000 subject-wise prometric MCQs with detailed explanations from 20+ subjects.",
  },
  {
    title: "THEORY",
    content:
      "More than 100 subject-wise theory questions with detailed explanations from 20+ subjects.",
  },
  {
    title: "MOCK TESTS",
    content:
      "More than 100 subject-wise theory questions with detailed explanations from 20+ subjects.",
  },
  {
    title: "RECALL MCQ'S",
    content:
      "More than 100 subject-wise theory questions with detailed explanations from 20+ subjects.",
  },
  {
    title: "IMAGE BASED MCQ'S",
    content:
      "More than 100 subject-wise theory questions with detailed explanations from 20+ subjects.",
  },
  {
    title: "ETHICS",
    content:
      "More than 100 subject-wise theory questions with detailed explanations from 20+ subjects.",
  },
];

const Pillcard = ({ title, content }) => {
  const [activePill, setActivePill] = useState(false);

  return (
    <div
      className={`w-[500px] p-4 rounded-lg shadow-lg border-2 border-white transition-all duration-500 ${
        activePill ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold">{title}</p>
        <button
          onClick={() => setActivePill(!activePill)}
          className="bg-[#FF9100] w-[24px] h-[24px] flex items-center justify-center rounded-full text-white text-[12px] font-semibold transition-transform duration-300"
        >
          {activePill ? "-" : ">"}
        </button>
      </div>
      <div className="h-[2px] w-[100px] bg-[#1CDDDA] my-2 transition-all duration-500"></div>
      
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          activePill ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const PillListContainer = () => {
  return (
    <div className="flex flex-wrap flex-col gap-2 justify-center">
      {PillList.map((pill, index) => (
        <Pillcard key={index} title={pill.title} content={pill.content} />
      ))}
    </div>
  );
};

export default PillListContainer;
