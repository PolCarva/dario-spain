import React from "react";

const ClientCard = ({ title, desc, quote, img, by }) => {
  return (
    <div className="bg-white w-full font-body max-w-[900px] mx-auto shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row justify-between">
      <div className="p-6 flex flex-col justify-center w-full md:w-4/5">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <img
            src={img}
            alt={title}
            className=" md:hidden my-2 aspect-video rounded-3xl object-cover w-full"
          />
        {by && <p className="mt-2 text-gray-600 text-sm">{by}</p>}
        <p className="mt-2 text-gray-600 text-sm">{desc}</p>
        {quote && (
          <blockquote className="mt-4 italic text-sm">{quote}</blockquote>
        )}
      </div>
      <div className="relative md:p-6 p-4 w-full md:w-1/4">
        <div className="md:relative md:pt-[100%] hidden md:block">
          {/* Aspect ratio 1:1 */}
          <img
            src={img}
            alt={title}
            className="absolute top-0 left-0 md:rounded-3xl object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
