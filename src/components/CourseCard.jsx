import React, { useState } from "react";
import ArrowRightWhite from "../assets/icons/rightArrowWhite.png";

const CourseCard = () => {
  const courses = [
    {
      id: "gpe",
      title: "GP Exams",
      subTitle: "Specialist Exams",
      image:
        "https://plus.unsplash.com/premium_vector-1720707264468-26496d39c9de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhhbXxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: "psv",
      title: "Data Flow Services (PSV)",
      subTitle: "Data Flow Services",
      image:
        "https://images.unsplash.com/vector-1739128047892-15cd29b3754a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: "tcam",
      title: "TCAM Practitioner Course",
      subTitle: "TCAM Practitioner Course",
      image:
        "https://plus.unsplash.com/premium_vector-1720798358283-4b26d0274e75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  const [activeTab, setActiveTab] = useState("gpe");
  const activeCourse = courses.find((c) => c.id === activeTab);

  return (
    <div className="w-full max-w-[85rem] mx-auto px-8 py-3">
      {/* Course Container */}
      <div className="flex flex-col md:flex-row gap-10 rounded-full">
        {/* Left side - Image Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-2 w-[35%] rounded-full">
          <img
            src={activeCourse.image}
            alt={activeCourse.title}
            className="w-[550px] h-[400px] object-cover"
          />
        </div>

        {/* Right side - Tabs and Content */}
        <div className="md:w-3/5">
          {/* Tabs Navigation */}
          <div className="flex gap-0.5 w-full">
            {courses.map((course) => (
              <button
                key={course.id}
                className={`py-3 px-6 w-full min-w-[240px] text-center rounded-t-lg text-[16px] font-normal transition-colors duration-200 ${
                  activeTab === course.id
                    ? "bg-white text-black rounded-t-2xl text-violet-800 border-b-2 border-white font-extrabold"
                    : "bg-transparent text-black hover:bg-white hover:rounded-t-2xl hover:font-semibold"
                }`}
                onClick={() => setActiveTab(course.id)}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Course Content */}
          <div className="bg-transparent p-6 rounded-lg">
            <h3 className="text-[28px] text-black font-normal">
              {activeCourse.subTitle}
              <div className="bg-white rounded-full h-[3px] w-[150px] mt-3"></div>
            </h3>
            <p className="text-[14px] text-black mb-5 font-normal mt-2">
              {activeCourse.content}
            </p>

            <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-8 py-3 flex items-center gap-3 transition-colors">
              Read More
              <img src={ArrowRightWhite} alt="arrow" className="w-6 h-6 mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
