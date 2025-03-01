import React from "react";
import RoundCard from "./RoundCard";

const Heading = (Heading ) => {
 

    const DividerWithCircle = () => {
        return (
          <div style={{ display: "flex", alignItems: "center",width:"25%", margin:"0 auto"}}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "black"}}></div>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#08ac2c",
                borderRadius: "50%",
                margin: "0 2px",
              }}
            ></div>
            <div style={{ flex: 1, height: "1px", backgroundColor: "black" }}></div>
          </div>
        );
      };

      if (Heading.type === "study") {
        return (
          <div className="text-center py-6  rounded-lg mt-10">
            <RoundCard type="study" title="STUDY PROGRAMS" />
            <h1 className="text-4xl font-bold my-6 text-[#333]">PROGRAMS FOR GENERAL PRACTITIONERS</h1>
            <DividerWithCircle />
          </div>
        );
      }
      if(Heading.type === "articles"){  
        return (
          <div className="text-center py-6 rounded-lg mt-5">
            <RoundCard type="study" title="OTHER COURSES" />
            <h1 className="text-4xl font-bold my-6 text-black">A BROAD SELECTION OF COURSES</h1>
            <DividerWithCircle />
          </div>
        );
      }
      if(Heading.type === "subscription"){  
        return (
          <div className="text-center py-6 rounded-lg mt-30">
            <RoundCard type="study" title="SUBSCRIPTION" />
            <h1 className="text-4xl font-bold my-6 text-black">HOW TO SUBSCRIBE</h1>
            <DividerWithCircle />
          </div>
        );
      }
      if(Heading.type === "doctor"){  
        return (
          <div className="py-6 rounded-lg mt-30">
            <RoundCard type="doctor" title="OUR TEAM" />
            <h1 className="text-4xl font-bold my-6 text-black">MEET OUR DOCTORS</h1>
          </div>
        );
      }
};
export default Heading;