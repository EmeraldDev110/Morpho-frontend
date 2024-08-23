import React, { useState } from "react";

const Contact = () => {
  // State to manage the visibility of each section
  const [isDocumentationOpen, setDocumentationOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);
  const [isDiscoverOpen, setDiscoverOpen] = useState(false);
  const [isCommunityOpen, setCommunityOpen] = useState(false);

  return (
    <div className="bg-[#10141C] rounded-lg p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white mt-20">
      {/* Logo and Legal Section */}
      <div className="mb-8 sm:mb-0">
        <img src="/images/morphod.png" alt="Morpho Logo" className="mb-4" />
        <p className="text-sm">&copy; 2024 Morpho Association</p>
        <p className="text-sm">
          <a href="#" className="underline">
            Legal notice
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="underline">
            Privacy policy
          </a>
        </p>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 w-full sm:w-auto">
        <div>
          <h3
            className="font-bold mb-2 cursor-pointer"
            onClick={() => setDocumentationOpen(!isDocumentationOpen)}
          >
            Documentation
          </h3>
          <ul
            className={`transition-all ${
              isDocumentationOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <a href="#" className="text-sm hover:underline">
                Blue Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Optimizer Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Optimizer Yellowpaper
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                General
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="font-bold mb-2 cursor-pointer"
            onClick={() => setResourcesOpen(!isResourcesOpen)}
          >
            Resources
          </h3>
          <ul
            className={`transition-all ${
              isResourcesOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <a href="#" className="text-sm hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Audits
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Addresses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Brand Kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="font-bold mb-2 cursor-pointer"
            onClick={() => setDiscoverOpen(!isDiscoverOpen)}
          >
            Discover
          </h3>
          <ul
            className={`transition-all ${
              isDiscoverOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <a href="#" className="text-sm hover:underline">
                Dune Analytics
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Warden Finance
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Token Terminal
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                DeFi Llama
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Debank
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="font-bold mb-2 cursor-pointer"
            onClick={() => setCommunityOpen(!isCommunityOpen)}
          >
            Community
          </h3>
          <ul
            className={`transition-all ${
              isCommunityOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <a href="#" className="text-sm hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Mirror
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
