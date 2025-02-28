import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="flex justify-center space-x-4 text-gray-700 font-small text-[14px] ml-65">
        {[
          "HOME",
          "ABOUT US",
          "BLOG",
          "GP EXAM",
          "SPECIALIST EXAM",
          "DENTIST EXAM",
        ].map((item) => (
          <div
            key={item}
            className="relative group cursor-pointer flex flex-col items-center"
          >
            <span className="hover:text-[#302c84]">{item}</span>
            <div className="absolute bottom-[-8px] w-full h-1 bg-[#302c84] rounded-full scale-0 group-hover:scale-100 transition-transform duration-800"></div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
