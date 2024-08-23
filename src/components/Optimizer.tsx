import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { TbArrowUpRight } from "react-icons/tb";
import { SlDrop } from "react-icons/sl";
import { GiPadlock } from "react-icons/gi";

const Optimizer = () => {
  const data = [
    {
      icon: <HiArrowTrendingUp />,
      title: "Better rates",
      para: "Earn more yield and reduce borrowing costs",
    },
    {
      icon: <SlDrop />,
      title: "Same liquidity",
      para: "Earn more yield and reduce borrowing costs",
    },
    {
      icon: <GiPadlock />,
      title: "Same risk parameters",
      para: "Earn more yield and reduce borrowing costs",
    },
  ];
  return (
    <div className="bg-black">
      <div className="rounded-lg bg-[#10141C] flex flex-col grotesk items-center justify-center px-4">
        <div className="pt-[10%] pb-[4%] flex flex-col items-center gap-6">
          <p className="text-white text-4xl md:text-5xl">Morpho Optimizers</p>
          <div className="flex flex-col items-center grotesk text-white text-opacity-20 text-center md:text-left">
            <p>
              Earn more yield and borrow for less while maintaining the same
            </p>
            <p>liquidity and risk parameters as Aave or Compound.</p>
          </div>

          <div className="flex w-full items-center justify-center">
            <button className="text-[13px] px-6 py-3 rounded-full bg-[#1259FF] capitalize text-white">
              Optimize Now
            </button>
          </div>

          <div className="lg:grid grid-cols-3 w-full gap-6">
            {data.map((d, i) => (
              <div
                className="flex flex-col items-center md:items-start grotesk gap-4 bg-[#161D2B] p-6 rounded-2xl m-4"
                key={i}
              >
                <div className="bg-black text-[#1259FF] flex w-[50px] h-[50px] text-2xl rounded-full items-center justify-center">
                  {d.icon}
                </div>
                <p className="text-[#F3F3F4]  font-bold text-[18px]">
                  {d.title}
                </p>
                <p className="w-[70%] text-white text-opacity-65 text-center md:text-left">
                  {d.para}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-end lg:mt-3">
            <span className="text-[#1259FF] flex flex-row items-center gap-2 hover:text-white hover:text-opacity-15 grotesk hover:duration-1000 ease-out">
              <a href="#">READ MORPHO BLUE WHITEPAPER </a>
              <TbArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimizer;
