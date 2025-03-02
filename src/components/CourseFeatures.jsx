import React, { useState } from "react";
import CourseBG from "../assets/images/courseBg.png";
import ArrowRightWhite from "../assets/icons/rightArrowWhite.png";

const tabs = ["MCQs", "Theory", "Recalls", "Flashcards", "Mock Tests"];

const contentData = {
  MCQs: [
    "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  Theory: [
    "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  Recalls: [
    "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  Flashcards: [
    "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
  "Mock Tests": [
    "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type & scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "✅ Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ],
};

const CourseFeatures = () => {
  const [activeTab, setActiveTab] = useState("MCQs");
  const [clicked, setClicked] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
    setClicked(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="flex space-x-4 bg-[#FF9100] p-3 rounded-full justify-center w-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-base  ${
              activeTab === tab
                ? "bg-white text-black"
                : "[#FF9100] text-white hover:bg-orange-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-[1350px] ml-40 flex">
        <div className="w-1/2">
          <h2 className="text-5xl font-semibold mb-4">{activeTab}</h2>
          <div className="bg-[#1CDDDA] h-1 w-50 rounded-full mb-4"></div>

          <p className="text-gray-700 mb-4">{contentData[activeTab][0]}</p>
          <ul className="list-none pl-0 text-gray-700">
            {contentData[activeTab].slice(1).map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-8 py-3 flex items-center gap-3 transition-colors mt-10">
            Read More
            <img src={ArrowRightWhite} alt="arrow" className="w-6 h-6 mt-1" />
          </button>
        </div>
        <div className="w-1/2 h-1/2 flex justify-center">
          <img
            src={CourseBG}
            alt="Relevant topic"
            className="rounded-lg shadow-md h-[470px] w-auto -mt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;
