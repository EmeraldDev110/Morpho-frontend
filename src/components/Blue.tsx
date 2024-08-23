import React from "react";
import { TbArrowUpRight, TbSearch } from "react-icons/tb";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { BsEye } from "react-icons/bs";

const Blue = () => {
  const data = [
    {
      img: "/images/secure.png",
      title: "Secure",
      content:
        "Simple, formally verified, and immutable code base audited by the best security firms in the world.",
    },
    {
      img: "/images/efficient.png",
      title: "Efficiently ",
      content:
        "Better rates, higher collateralization factors, and significantly cheaper gas costs than existing lending platforms",
    },
    {
      img: "/images/flexible.png",
      title: "Flexible",
      content:
        "Landing markets for any asset, with configurable parameters, allowing for diverse risk exposures.",
    },
  ];
  const data2 = [
    {
      img: "/images/earn-removebg-preview.png",
      title: "Earn",
      subtitle: "Via MetaMorpho Vaults",
      search: <TbSearch />,
      icon1: <HiArrowTrendingUp />,
      icon1content: "Better Yield",
      icon2: <BsEye />,
      icon2content: "Transparent",
      link: "/",
    },
  ];
  return (
    <div className="lg:py-[15%] flex flex-col lg:gap-16 z-10">
      <div className="flex flex-col lg:gap-16">
        <div className="flex flex-col grotesk leading-none items-center justify-center space-y-4">
          <p className="text-white text-[80px] md:text-[160px]">Morpho</p>
          <p className="text-[#1259FF] text-6xl md:text-[100px]">BLUE</p>
        </div>
        <div className="py-4 text-white text-xl md:text-[25px] grotesk flex flex-col grotesk leading-none space-y-2 items-center justify-center">
          <p className="">A trustless and efficient lending primitive</p>
          <p className="">with permissionless market creation.</p>
        </div>
      </div>
      <div className="px-[3%] flex flex-col gap-5">
        <div className="flex w-full justify-end">
          <span className="text-[#1259FF] flex flex-row items-center gap-2 hover:text-white hover:text-opacity-15 grotesk hover:duration-1000 ease-out">
            <a href="#">READ MORPHO BLUE WHITEPAPER </a>
            <TbArrowUpRight />
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((d, i) => (
            <div
              key={i}
              className="px-9 py-8 bg-[#161D2B] rounded-[30px] group transition-transform duration-500"
            >
              <div className="w-full transform transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-y-20 flex items-center justify-center">
                <img src={d.img} />
              </div>
              <div className="transform transition-transform duration-500 text-white text-4xl group-hover:-translate-y-20 ">
                {d.title}
              </div>
              <div className="transform transition-transform text-opacity-20 duration-500 text-white text-xl w-[80%] opacity-0 duration-500 group-hover:-translate-y-20 group-hover:opacity-100 group-hover:-translate-y-20">
                {d.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[90vh] flex flex-row  items-center justify-center px-[10%] empowering">
        <div className="flex flex-row w-full justify-between items-center">
          <img src="/images/earn-removebg-preview.png" alt="" />
          <div className="h-[50vh] w-[50%] overflow-y-scroll">
            <div className="flex flex-row items-start justify-around h-full">
              <div>
                <div className="flex flex-col leading-none grotesk gap-3">
                  <p className=" text-white text-[64px] ">Earn</p>
                  <p className="text-[24px] text-white text-opacity-25 ">
                    Via MetaMorpho Vaults
                  </p>
                </div>
                <a href={""}>EARN NOW</a>
              </div>
              <div className="flex flex-col justify-between h-[34vh]">
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <TbSearch />
                  </i>
                  <p className="text-white text-[20px]">Curated Risk</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <HiArrowTrendingUp />
                  </i>
                  <p className="text-white text-[20px]">Better Yield</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <BsEye />
                  </i>
                  <p className="text-white text-[20px]">Transparent</p>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-around h-full">
              <div>
                <div className="flex flex-col leading-none grotesk gap-3">
                  <p className=" text-white text-[64px] ">Borrow</p>
                  <p className="text-[24px] text-white text-opacity-25 ">
                    On Morpho Blue{" "}
                  </p>
                </div>
                <a href={""}>EARN NOW</a>
              </div>
              <div className="flex flex-col justify-between h-[34vh]">
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <TbSearch />
                  </i>
                  <p className="text-white text-[20px]">Lower costs</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <HiArrowTrendingUp />
                  </i>
                  <p className="text-white text-[20px]">Higher LLTV</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <BsEye />
                  </i>
                  <p className="text-white text-[20px]">Any asset</p>
                </span>
              </div>
            </div>
            <div className="flex flex-row items-start justify-around h-full">
              <div>
                <div className="flex flex-col leading-none grotesk gap-3">
                  <p className=" text-white text-[64px] ">Build</p>
                  <p className="text-[24px] text-white text-opacity-25 ">
                    On Morpho Blue
                  </p>
                </div>
                <a href={""}>EARN NOW</a>
              </div>
              <div className="flex flex-col justify-between h-[34vh]">
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <TbSearch />
                  </i>
                  <p className="text-white text-[20px]">Unopinionated</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <HiArrowTrendingUp />
                  </i>
                  <p className="text-white text-[20px]">Immutable</p>
                </span>
                <span className="flex flex-row items-center gap-3">
                  <i className="text-[#1259FF]">
                    <BsEye />
                  </i>
                  <p className="text-white text-[20px]">Ultra-efficient</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Blue;
