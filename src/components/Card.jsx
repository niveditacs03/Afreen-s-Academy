import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Card = ({ image, title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-72 h-[350px] flex-shrink-0">
      <img
        src={image}
        alt="Card Image"
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <h1 className="text-xl font-bold mt-3">{title}</h1>
      <p className="text-gray-600 text-sm mt-2">{content}</p>
      <div className="flex justify-end mt-4">
        <button className="bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-teal-600 transition">
          <ArrowOutwardIcon className="!w-6 !h-6" />
        </button>
      </div>
    </div>
  );
};

export default Card;
