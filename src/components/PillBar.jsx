import React from "react";
import teachIcon from "../assets/icons/teach.png";
import GrauateIcon from "../assets/icons/classesCompleted.png";
import ReviewIcon from "../assets/icons/review.png";
import studentIcon from "../assets/icons/employee.png";
import SubscriptionIcon from "../assets/icons/subscription.png";
import EmailIcon from "../assets/icons/email.png";
import MaterialsIcon from "../assets/icons/easy-access.png";

const stats = [
  { id: 1, value: "425", label: "Total Classroom", icon: "classroom" },
  { id: 2, value: "25K +", label: "Classes Completed", icon: "classes" },
  { id: 3, value: "75K +", label: "Satisfaction Rate", icon: "satisfaction" },
  { id: 4, value: "125K +", label: "Students Community", icon: "students" },
];

const SUBSCRIBE = [
  {
    id: "1",
    step: "01",
    title: "Subscription",
    description:
      "The First Step Is To Purchase Your Ideal Prometric Exam Package",
    icon: "subscribe",
  },
  {
    id: "2",
    step: "02",
    title: "Email Confirmation",
    description:
      "Once You Have Subscribed, You Will Receive A Confirmation Email To Your Dashboard.",
    icon: "email",
  },
  {
    id: "3",
    step: "03",
    title: "Access Our Materials",
    description:
      "You Will Get Immediate Access To Our Materials After Payment Confirmation.",
    icon: "materials",
  },
];

const icons = {
  classroom: <img src={teachIcon} alt="teach" className="w-8 h-8" />,
  classes: <img src={GrauateIcon} alt="Graduate" className="w-8 h-8" />,
  satisfaction: <img src={ReviewIcon} alt="Review" className="w-8 h-8" />,
  students: <img src={studentIcon} alt="student" className="w-8 h-8" />,
  subscribe: (
    <img src={SubscriptionIcon} alt="Subscription" className="w-8 h-8" />
  ),
  email: <img src={EmailIcon} alt="email" className="w-8 h-8" />,
  materials: <img src={MaterialsIcon} alt="Materials" className="w-8 h-8" />,
};

const PillBar = ({ type }) => {
  if (type === "course") {
    return (
      <div className="w-[950px] h-full px-4 py-6 mt-6">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1404349414/photo/world-map-topographic-map-dark-ocean-color.jpg?s=1024x1024&w=is&k=20&c=O73nuFsIA1ofIWvlNVT777zIU0_3nMwvajb1qSkCa5g=')",
              }}
            ></div>
          </div>

          <div
            className="relative rounded-full flex justify-between items-center w-full py-8 px-8 shadow-md z-10"
            style={{ backgroundColor: "#b3e6f4", opacity: "85%" }}
          >
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center">
                <div className="bg-white rounded-full p-4 flex items-center justify-center mr-3">
                  <span className="text-gray-800">{icons[stat.icon]}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-black">{stat.value}</h3>
                  <p className="text-sm text-black">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "subscription") {
    return (
      <div className="flex flex-col items-center gap-4 w-[600px] h-full px-4 py-6 mt-6">
        {SUBSCRIBE.map((step) => (
          <div
            key={step.id}
            className="flex items-center bg-white rounded-full shadow-lg p-5 w-full h-[110px]" // Fixed width & height
          >
            {/* Icon */}
            <div className="bg-[#E2FFF0] rounded-full p-4 flex items-center justify-center mr-3">
              {icons[step.icon]}
            </div>
  
            {/* Content */}
            <div className="ml-4 flex flex-col w-full">
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

  return null;
};

export default PillBar;
