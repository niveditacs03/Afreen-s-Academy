import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import rightArrow from "../assets/icons/rightArrow.png"; 

const Card = ({ image, title, content, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-72 h-[350px] flex-shrink-0 shadow:md">
      <img
        src={image}
        alt="Card Image"
        className="w-full h-40 object-cover rounded-t-2xl"
      />

      <h1 className="text-xl font-bold mt-3">{title}</h1>
      <div className="w-20 h-1 bg-green-400 mt-1 rounded-full"></div>

      <p className="text-gray-600 text-sm mt-2">{content}</p>
      {/* button for non doctors */}
      {type !== "doctor" && (
        <div className="flex justify-end mt-4">
          {isOpen ? (
            <button
              className="bg-teal-500 text-white w-11 h-11 flex items-center justify-center rounded-full shadow-md hover:bg-teal-600 transition"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <ArrowOutwardIcon className="!w-6 !h-6" />
            </button>
          ) : (
            <img
              src={rightArrow}
              alt="arrow"
              className="w-6 h-6"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;