import React from "react";

// Icon imports
import teachIcon from "../assets/icons/teach.png";
import GrauateIcon from "../assets/icons/classesCompleted.png";
import ReviewIcon from "../assets/icons/review.png";
import studentIcon from "../assets/icons/employee.png";
import SubscriptionIcon from "../assets/icons/subscription.png";
import EmailIcon from "../assets/icons/email.png";
import MaterialsIcon from "../assets/icons/easy-access.png";

// Data configurations
const STATS = [
  { id: 1, value: "425", label: "Total Classroom", icon: "classroom" },
  { id: 2, value: "25K +", label: "Classes Completed", icon: "classes" },
  { id: 3, value: "75K +", label: "Satisfaction Rate", icon: "satisfaction" },
  { id: 4, value: "125K +", label: "Students Community", icon: "students" },
];

const SUBSCRIBE_STEPS = [
  {
    id: "1",
    title: "Subscription",
    description: "The First Step Is To Purchase Your Ideal Prometric Exam Package",
    icon: "subscribe",
  },
  {
    id: "2",
    title: "Email Confirmation",
    description: "Once You Have Subscribed, You Will Receive A Confirmation Email To Your Dashboard.",
    icon: "email",
  },
  {
    id: "3",
    title: "Access Our Materials",
    description: "You Will Get Immediate Access To Our Materials After Payment Confirmation.",
    icon: "materials",
  },
];

// Icon mapping object
const ICON_SOURCES = {
  classroom: { src: teachIcon, alt: "Teach" },
  classes: { src: GrauateIcon, alt: "Graduate" },
  satisfaction: { src: ReviewIcon, alt: "Review" },
  students: { src: studentIcon, alt: "Student" },
  subscribe: { src: SubscriptionIcon, alt: "Subscription" },
  email: { src: EmailIcon, alt: "Email" },
  materials: { src: MaterialsIcon, alt: "Materials" },
};

// Reusable components
const Icon = ({ type }) => {
  const iconConfig = ICON_SOURCES[type] || ICON_SOURCES.classroom;
  return <img src={iconConfig.src} alt={iconConfig.alt} className="w-8 h-8" />;
};

const StatItem = ({ value, label, icon }) => (
  <div className="flex items-center">
    <div className="bg-white rounded-full p-4 flex items-center justify-center mr-3">
      <span className="text-gray-800">
        <Icon type={icon} />
      </span>
    </div>
    <div className="text-left">
      <h3 className="text-xl font-bold text-black">{value}</h3>
      <p className="text-sm text-black">{label}</p>
    </div>
  </div>
);

const SubscriptionStep = ({ title, description, icon }) => (
  <div className="flex items-center bg-white rounded-full shadow-lg p-5 w-full h-[110px]">
    <div className="bg-[#E2FFF0] rounded-full p-4 flex items-center justify-center mr-3">
      <Icon type={icon} />
    </div>
    <div className="ml-4 flex flex-col w-full">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-normal text-gray-600">{description}</p>
    </div>
  </div>
);

// Component-specific containers
const CourseStats = () => (
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
        {STATS.map((stat) => (
          <StatItem key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  </div>
);

const SubscriptionSteps = () => (
  <div className="flex flex-col items-center gap-4 w-[600px] h-full px-4 py-6 mt-6">
    {SUBSCRIBE_STEPS.map((step) => (
      <SubscriptionStep key={step.id} {...step} />
    ))}
  </div>
);


const PillBar = ({ type }) => {
  switch (type) {
    case "course":
      return <CourseStats />;
    case "subscription":
      return <SubscriptionSteps />;
    default:
      return null;
  }
};

export default PillBar;