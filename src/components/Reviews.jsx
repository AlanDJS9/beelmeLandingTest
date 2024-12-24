import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Mission      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
        To connect travelers with authentic, curated experiences across Mexico, fostering cultural exchange and exploration through an intuitive platform that empowers users to discover, create, and share their unique journeys.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
        
        <div>
        <h1 className="text-[40px] text-center font-black">
        Vision      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
        To become the go-to platform for travelers exploring Mexico, offering a community-driven approach to tourism that highlights the country’s beauty, culture, and diversity while promoting sustainable and meaningful travel.        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
        </div>
      </div>
  );
};

export default Reviews;
