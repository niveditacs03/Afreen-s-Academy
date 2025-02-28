import React from "react";
import teachIcon from "../assets/icons/teach.png";
import GrauateIcon from "../assets/icons/classesCompleted.png";
import ReviewIcon from "../assets/icons/review.png";
import studentIcon from "../assets/icons/employee.png";

const stats = [
  { id: 1, value: "425", label: "Total Classroom", icon: "classroom" },
  { id: 2, value: "25K +", label: "Classes Completed", icon: "classes" },
  { id: 3, value: "75K +", label: "Satisfaction Rate", icon: "satisfaction" },
  { id: 4, value: "125K +", label: "Students Community", icon: "students" },
];

// SVG icons for each stat
const icons = {
  classroom: (
    <img src={teachIcon} alt="teach" className="w-8 h-8" />
  ),
  classes: (
    <img src={GrauateIcon} alt="Grauate" className="w-8 h-8"/>
  ),
  satisfaction: (
    <img src={ReviewIcon} alt="Review" className="w-8 h-8" />
  ),
  students: (
    <img src={studentIcon} alt="student" className="w-8 h-8" />
  )
};

const PillBar = () => {
  return (
    <div className="w-[950px] px-4 py-6 mt-6" style={{ backgroundColor: "transparent" }}>
      {/* Container for pill and background - using relative positioning */}
      <div className="relative max-w-6xl mx-auto">
        {/* Background with website URL - same size and shape as pill */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://media.istockphoto.com/id/1404349414/photo/world-map-topographic-map-dark-ocean-color.jpg?s=1024x1024&w=is&k=20&c=O73nuFsIA1ofIWvlNVT777zIU0_3nMwvajb1qSkCa5g=')"
            }}
          ></div>
        </div>
        
        {/* Pill Bar with semi-transparent background */}
        <div 
          className="relative rounded-full flex justify-between items-center w-full py-4 px-8 shadow-md z-10"
          style={{ backgroundColor: '#b3e6f4', opacity: "85%" }} 
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center" style={{ opacity: 1 }}>
              <div className="bg-white rounded-full p-3 flex items-center justify-center mr-3">
                <span className="text-gray-800" style={{ opacity: 1 }}>
                  {icons[stat.icon]}
                </span>
              </div>
              <div className="text-left" style={{ opacity: 1 }}>
                <h3 className="text-xl font-bold text-black">{stat.value}</h3>
                <p className="text-sm text-black">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillBar;