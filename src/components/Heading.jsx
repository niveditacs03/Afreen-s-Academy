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
          <div className="text-center py-6 bg-gradient-to-br from-white to-[#f9f9ff] rounded-lg">
            <RoundCard type="study" title="STUDY PROGRAMS" />
            <h1 className="text-4xl font-bold my-6 text-[#333]">PROGRAMS FOR GENERAL PRACTITIONERS</h1>
            <DividerWithCircle />
          </div>
        );
      }

};
export default Heading;