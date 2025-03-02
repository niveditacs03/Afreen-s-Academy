import React from "react";

const plans = [
  {
    title: "PLAN A",
    type: "Premium",
    description: "Videos + QBank + Test Series",
    features: [
      "Video lectures",
      "Subject wise Q bank tailored for your exam",
      "Quick review notes from high yield exam topics",
      "Subject wise PYQs (Past year questions / Recalls)",
      "Golden Recalls",
      "12 full length time based mock tests",
      "Image based MCQs"
    ],
  },
  {
    title: "PLAN B",
    type: "Basic",
    description: "QBank + Test Series",
    features: [
      "Subject wise Q bank tailored for your exam",
      "Quick review notes from high yield exam topics",
      "Subject wise PYQs (Past year questions / Recalls)",
      "Golden Recalls",
      "12 full length time based mock tests",
      "Image based MCQs"
    ],
  },
  {
    title: "PLAN C",
    type: "Starter",
    description: "Test Series",
    features: [
      "12 Full length time based Mock Test Series + Track your progress using our Learning Analytics.",
      "Flash cards - memorise medical concepts with the help of our flash cards."
    ],
  }
];

const PlanCards = () => {
    return (
      <div className="flex justify-center gap-10 p-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md w-80 bg-[#E1FAFF] text-black transition-all duration-300 hover:scale-110 hover:bg-[#12141D] hover:text-white group"
          >
            <p className={`font-semibold ${plan.textColor} text-[#FF9100] group-hover:text-white`}>{plan.type}</p>
            <h2 className="text-2xl font-bold group-hover:text-white">{plan.title}</h2>
            <p className="mt-1 mb-4 text-sm font-medium group-hover:text-white">{plan.description}</p>
            <div className="h-0.25 w-auto bg-gray-500 rounded-full mb-3"></div>
            <ul className="mb-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 group-hover:text-white">
                  <span className="text-green-500 group-hover:text-white">✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 w-full bg-transparent border-1 rounded-full shadow-md font-semibold text-black group-hover:bg-white group-hover:text-black">Get Started</button>
          </div>
        ))}
      </div>
    );
  };
  
  
  export default PlanCards;