import React from "react";

const DividerWithCircle = () => (
    <div style={{ display: "flex", alignItems: "center", width: "70%", margin: "0 auto" }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: "gray" }}></div>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#08ac2c",
          borderRadius: "50%",
          margin: "0 2px",
        }}
      ></div>
      <div style={{ flex: 1, height: "1px", backgroundColor: "gray" }}></div>
    </div>
  );
  export default DividerWithCircle;