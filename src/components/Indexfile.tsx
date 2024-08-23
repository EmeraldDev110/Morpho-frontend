import React, { useState } from "react";
import { motion } from "framer-motion";
import Nav from "../Nav";
import Blue from "./Blue";
import IconGroup from "./IconGroup";
import Optimizer from "./Optimizer";
import Empowering from "./Empowering";
import LeadingIndustry from "./LeadingIndustry";
import "../index.css";
import Contact from "./Contact";
import Governance from "./Governance";

const words = ["Efficient", "Flexible", "Secure"];

const Indexfile = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const swipeUp = {
    initial: { y: 0, opacity: 1 },
    exit: { y: -80, opacity: 0, transition: { duration: 0.5 } },
    enter: { y: 25, opacity: 0, transition: { duration: 2.5 } },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="bg-black w-full overflow-auto md:px-40">
      {/* Video Background */}
      <div className="left-border"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        className="absolute inset-1/2 md:w-1/2 md:h-auto -translate-x-1/2 -translate-y-3/4 md:-translate-y-1/2 object-cover"
      >
        <source
          src="/assets/Morpho-Shape-Squared-p9bcrXn4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-[100vh] bg-opacity-5 flex flex-col items-center justify-center mt-40 md:mt-0">
        <Nav />
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center text-2xl text-white grotesk">
            <p>Earn, Borrow</p>
            <p>and Build on Morpho</p>
          </div>
          <div className="flex flex-col items-center text-4xl md:text-[64px] grotesk text-white mt-8 leading-none">
            <p>
              The Most
              <span className="">
                <motion.span
                  key={currentWordIndex}
                  variants={swipeUp}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                  onAnimationComplete={handleNextWord}
                  className="inline-block ml-2 z-[10]"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </span>
            </p>
            <p>Lending Protocol</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[13%] absolute bottom-14 md:left-14">
          <div className="text-center md:text-left">
            <p className="text-white text-opacity-35">TOTAL SUPPLY</p>
            <p className="text-[32px] helvetica text-white tracking-wider">
              $2,023,346,471
            </p>
          </div>
          <div>
            <p className="text-white text-opacity-35">TOTAL BORROW</p>
            <p className="text-[32px] helvetica text-white tracking-wider">
              $818,459,224
            </p>
          </div>
        </div>
      </div>

      {/* Other Content Sections */}
      <Blue />
      <Optimizer />
      <IconGroup />
      <Empowering />
      <LeadingIndustry />
      <Governance />
      <Contact />
    </div>
  );
};

export default Indexfile;
