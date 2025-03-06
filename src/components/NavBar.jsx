import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <Link to={to} className="relative group cursor-pointer flex flex-col items-center">
      <span className="hover:text-[#302c84]">{children}</span>
      <div className="absolute bottom-[-8px] w-full h-1 bg-[#302c84] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="flex justify-center space-x-4 text-gray-900 font-small text-[14px]">
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/about">ABOUT US</NavItem>
        <NavItem to="/blog">BLOG</NavItem>
        <NavItem to="/gp-exam">GP EXAM</NavItem>
        <NavItem to="/specialist-exam">SPECIALIST EXAM</NavItem>
        <NavItem to="/dentist-exam">DENTIST EXAM</NavItem>
      </div>
    </nav>
  );
};

export default NavBar;