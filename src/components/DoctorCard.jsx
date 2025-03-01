import React from "react";
import Card from "./Card";
import Afreen from "../assets/images/afreen.png";
import Mubeen from "../assets/images/mubeen.png";
import Sinha from "../assets/images/sinha.png";
import Nadir from "../assets/images/nadir.png";
import Fathimathu from "../assets/images/fathimathu.png";

const DoctorCard = ({ containerRef }) => {
  const doctors = [
    {
      id: 1,
      name: "DR. AFREEN SHEIKH",
      role: "CEO & Founder Of Dr. Afreen's Academy",
      image: Afreen,
    },
    {
      id: 2,
      name: "DR. MOHAMMAD MUBEEN",
      role: "Co - Founder Of Dr. Afreen's Academy",
      image: Mubeen,
    },
    {
      id: 3,
      name: "DR. SARVODAYAI SINHA",
      role: "Associate Life Member Of Indian Society Of Critical Care Medicine",
      image: Sinha,
    },
    {
      id: 4,
      name: "DR. MAHWISH NADIR",
      role: "Member Pakistan Pediatric Association",
      image: Nadir,
    },
    {
      id: 5,
      name: "DR. FATHIMATHU",
      role: "Member Of The Indian Association",
      image: Fathimathu,
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-auto gap-3 p-6 bg-gradient-to-b from-white to-green-100 scrollbar-hide -mt-10"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {doctors.map((doctor) => (
        <Card
          key={doctor.id}
          image={doctor.image}
          title={doctor.name}
          content={doctor.role}
          type="doctor"
        />
      ))}
    </div>
  );
};

export default DoctorCard;