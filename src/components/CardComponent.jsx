import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ title, icon, img, id }) => {
  return (
    <Link
      to={`/portfolio/${id}`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${img})`,
      }}
      className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer w-full rounded-lg flex flex-col items-center justify-end bg-cover bg-center p-5"
    >
      <div className="rounded-full bg-gray-detail h-14 w-14 p-2 border-2 border-white grid place-items-center text-white">
        {icon}
      </div>
      <h5 className="text-white mt-2 text-xl font-body font-medium">{title}</h5>
    </Link>
  );
};

export default CardComponent;
