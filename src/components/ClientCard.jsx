import React from "react";

const ClientCard = ({ title, desc, quote, img }) => {
  return (
    <div className="bg-white font-body max-w-[900px] mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row justify-between items-center">
      <div className="p-6 flex flex-col justify-center w-4/5">
        <h2 className="text-xl md:text-2xl font-bold text-primary">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{desc}</p>
        {quote && (
          <blockquote className="mt-4 italic">{quote}</blockquote>
        )}
      </div>
      <div className="relative md:p-6 p-4 w-full md:w-1/4">
        <div className="relative pt-[100%]">  {/* Aspect ratio 1:1 */}
          <img
            src={img}
            alt={title}
            className="absolute top-0 left-0 rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
