import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import { FaBug } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const LeadingIndustry = () => {
  const image = [
    { image: "/images/leadingimg/spearbit.svg" },
    { image: "/images/leadingimg/trail.svg" },
    { image: "/images/leadingimg/chainsecurity.svg" },
    { image: "/images/leadingimg/pessimistic.png" },
    { image: "/images/leadingimg/runtime-verification.png" },
    { image: "/images/leadingimg/certora.svg" },
    { image: "/images/leadingimg/solidified.svg" },
    { image: "/images/leadingimg/omniscia.png" },
    { image: "/images/leadingimg/securing.svg" },
    { image: "/images/leadingimg/lexfo.png" },
    { image: "/images/leadingimg/cantina.svg" },
    { image: "/images/leadingimg/openzeppelin.svg" },
  ];
  const data = [
    {
      icon: <AiOutlineSafetyCertificate />,
      title: "Safety Ratings",
      para: "Morpho's overall score of 98% is the highest received by the 300+ protocols reviewed by DeFi Safety.",
      link: "DEFISAFETY REPORT",
    },
    {
      icon: <TbSearch />,
      title: "Formal Verification",
      para: "The protocol's logic was formally described in the yellow paper. Automated tools like Certora and Why3 have proved many properties of the code.",
      link: "MORE INFORMATION",
    },
    {
      icon: <FaBug />,
      title: "Bug Bounty",
      para: "To ensure Morpho is as secure as possible, there are rewards of up to $2,500,000 for any bugs or vulnerabilities found and submitted via Immunefi.",
      link: "MORE INFORMATION",
    },
  ];
  return (
    <div className="bg-black">
      <div className="rounded-lg bg-[#10141C] flex flex-col gap-10 grotesk items-center justify-center">
        <div className="pt-[10%] pb-[4%] flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row text-white text-3xl md:text-5xl items-center justify-center">
            <p className="md:mr-4">Industry Leading</p>
            <p>Security Practices</p>
          </div>

          <div className="flex flex-col items-center grotesk text-white text-opacity-20">
            <p className="lg:w-[80%] text-center">
              Security of Morpho is the highest priority, with over 23 audits by
              crypto's most renowned security firms.
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <button className="text-[13px] px-6 py-3 rounded-full bg-[#1259FF] capitalize text-white">
              See Audits
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 lg:gap-[4rem] md:gap-[3rem] gap-[2rem] lg:px-0 px-[10%] items-center">
          {image.map((i, index) => (
            <img
              key={index}
              className="w-[140px] h-[50px]"
              src={i.image}
              alt="Leading Industry"
            />
          ))}
        </div>

        <div className="lg:grid grid-cols-3 lg:pb-[3rem] w-full gap-6 lg:w-[83%] lg:mt-8 mt-4 space-y-4">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex flex-col h-[300px] justify-between grotesk gap-4 bg-[#161D2B] p-6 rounded-2xl"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[#F3F3F4]  font-bold text-[18px]">
                    {d.title}
                  </p>
                  <div className="bg-black text-[#1259FF] flex w-[40px] h-[40px] text-2xl rounded-full items-center justify-center">
                    {d.icon}
                  </div>
                </div>
                <p className="w-[80%] text-white text-opacity-65">{d.para}</p>
              </div>
              <div className="text-[#1259FF] font-semibold flex flex-row items-center gap-3 grotesk">
                <a href="">{d.link}</a>
                <MdArrowOutward className="" />
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LeadingIndustry;
