import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const TwinButton = ({ scrollRef, scrollDistance = 300 }) => {
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => scroll("left")}
        className="bg-gray-300 text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-blue-800 hover:text-white"
      >
        <ArrowOutwardIcon className="!w-6 !h-6 transform rotate-[-135deg]" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="bg-gray-300 text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-blue-800 hover:text-white"
      >
        <ArrowOutwardIcon className="!w-6 !h-6 transform rotate-[45deg]" />
      </button>
    </div>
  );
};

export default TwinButton;