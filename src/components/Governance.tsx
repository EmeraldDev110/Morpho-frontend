import React from "react";

const Governance = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Top Section with Image and Title */}
      <div className="text-center mb-16">
        <img
          src="/images/earn-removebg-preview.png"
          alt="Governance"
          className="w-full max-w-md mx-auto"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-8">
          Participate in <br /> Morpho Governance
        </h1>
      </div>

      {/* Bottom Section with Action Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <div className="bg-[#10141C] rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Discuss</h2>
            <p className="text-sm">
              Anyone is free to propose or discuss changes and improvements to
              Morpho.
            </p>
          </div>
          <div className="bg-blue-600 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="bg-[#10141C] rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Vote</h2>
            <p className="text-sm">
              Morpho token holders decide on the future of the protocol.
            </p>
          </div>
          <div className="bg-blue-600 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
