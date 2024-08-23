import React from "react";

const Empowering = () => {
  return (
    <div className="bg-black">
      <div className="pt-[10%] pb-[4%] flex flex-col items-center gap-6">
        <p className="text-white text-3xl md:text-5xl">
          Empowering DeFi Innovation
        </p>
        <div className="flex flex-col items-center grotesk text-white text-opacity-20">
          <p>The Morpho ecosystem features 200+ projects</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <button className="text-[13px] px-6 py-4 rounded-full bg-[#1259FF] capitalize text-white">
            Discord
          </button>
          <button className="text-[13px] px-6 py-4 rounded-full bg-[#1259FF] capitalize text-white">
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
