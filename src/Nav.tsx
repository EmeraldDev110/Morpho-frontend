import React, { useState } from "react";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="w-full justify-between flex flex-row items-center lg:px-[3%] fixed top-4 z-50">
        {/* Logo */}
        <div className="flex backdrop-blur-xl rounded-full items-center w-fit ml-4">
          <img
            className="w-[90%]"
            src="/images/morphod.png"
            alt="Morpho Logo"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex backdrop-blur-xl rounded-full w-[45%] flex-row items-center justify-between text-[16px] text-white text-opacity-40 py-1 pl-6 pr-1 font-semibold bg-white bg-opacity-5">
          <a href={"#"}>Research</a>
          <a href={"#"}>MetaMorpho</a>
          <a href={"#"}>Governance</a>
          <a href={"#"}>Docs</a>
          <a href={"#"}>Blog</a>
          <a href={"#"}>Jobs</a>
          <a href={"#"}>FAQ</a>
          <button className="px-5 py-3 bg-[#2470FF] rounded-full">
            <a className="text-white" href={"#"}>
              LAUNCH APP
            </a>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex md:hidden mr-4">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start justify-center h-full p-8 space-y-6 text-white">
          <a href={"#"} className="text-lg">
            Research
          </a>
          <a href={"#"} className="text-lg">
            MetaMorpho
          </a>
          <a href={"#"} className="text-lg">
            Governance
          </a>
          <a href={"#"} className="text-lg">
            Docs
          </a>
          <a href={"#"} className="text-lg">
            Blog
          </a>
          <a href={"#"} className="text-lg">
            Jobs
          </a>
          <a href={"#"} className="text-lg">
            FAQ
          </a>
          <button className="px-5 py-3 mt-4 bg-[#2470FF] rounded-full">
            <a className="text-white" href={"#"}>
              LAUNCH APP
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
