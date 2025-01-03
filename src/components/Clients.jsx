import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
Visit your favorite cities
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-30">
        <img src="beeLME2.png" className="w-40" />
        <img src="beeLME1.png" className="w-40" />
        <img src="beeLME3.png" className="w-40" />
        <img src="beeLME4.png" className="w-40" />
        <img src="beeLME5.png" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
