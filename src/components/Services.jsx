import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";
import { ImMap2, ImShare2, ImAccessibility, ImTable2 } from "react-icons/im";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">🌍 Explore Mexico Like Never Before!</h1>
        <p className="text-[20px] text-gray-500">
        Get exclusive early access to beelme, the ultimate travel app for discovering and sharing the best tours around Mexico.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribe
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <ImMap2 className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Discover</h3>
          <p className="text-gray-500">
          Immerse yourself in authentic experiences crafted by real people, not just generic travel guides.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ImShare2 className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Create and Share</h3>
          <p className="text-gray-500">
          Inspire others by creating and sharing your own tours with fellow explorers.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ImAccessibility className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Choose</h3>
          <p className="text-gray-500">
          Make informed choices with honest reviews and ratings from other travelers.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ImTable2 className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Plan</h3>
          <p className="text-gray-500">
          From costs to directions, our app makes it easy to plan unforgettable adventures.          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
