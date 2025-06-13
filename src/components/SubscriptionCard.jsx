import React from "react";
import PillBar from "./PillBar";
import Image from "../assets/images/subscribeImage.jpg"; 
import SubscriptionIcon from "../assets/icons/subscription.png";

const SubscriptionCard = () => {
  return (
    <div className="w-[1360px] h-[600px] bg-[#1E616D] rounded-3xl flex items-center justify-between p-6">
      {/* left image*/}
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={Image}
          alt="subscribe"
          className="w-[600px] h-[500px] object-cover rounded-2xl"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center -mt-10">

        <PillBar type="subscription" />

        
        <div className="text-white text-xl font-normal -mt-35 ml-5">
          START YOUR PROMETRIC EXAM PREPARATION WITH US TODAY!
        </div>

       
        <div className="self-start mt-4 ml-5">
          <button className="bg-[#E2FFF0] text-black rounded-full px-4 py-2 flex items-center gap-2 font-semibold text-lg hover:bg-[#72CCCB] hover:text-white">
            <img
              src={SubscriptionIcon}
              alt="subscription"
              className="w-6 h-6"
            />
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
