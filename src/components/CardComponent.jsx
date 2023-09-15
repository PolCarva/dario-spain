import React from "react";

const CardComponent = ({ title, icon, img }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${img})`,
      }}
      className="h-full w-full rounded-lg flex flex-col items-center justify-end bg-cover bg-center p-5"
    >
      <div className="rounded-full bg-gray-detail h-14 w-14 p-2 border-2 border-white grid place-items-center text-white">
        {icon}
      </div>
      <h5 className="text-white mt-2 text-xl font-body font-medium">{title}</h5>
    </div>
  );
};

export default CardComponent;
