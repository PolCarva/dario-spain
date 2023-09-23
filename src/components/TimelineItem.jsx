import React from "react";
import { Link, useLocation } from "react-router-dom";

const TimelineItem = ({ Icon, path, label }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`transition-all duration-300 hover:bg-primary hover:text-white group hover:border-white relative md:w-14 md:h-14 w-10 h-10 rounded-full ${isActive ? "bg-primary border-white" : "bg-white border-black"} border grid content-center text-center z-10`}
    >
      <Icon className={`transition-all duration-300 w-full h-full p-2.5 md:p-3.5 group-hover:text-white  text-${isActive ? 'white' : 'black'}`} />
      <span className="absolute font-medium -bottom-8 left-1/2 hidden md:block -translate-x-1/2 text-black">
        {label}
      </span>
    </Link>
  );
};

export default TimelineItem;
