import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full justify-between flex flex-row items-center bg-red-600">
      <div>
        <img src="/images/morphoimg.svg" alt="" />
      </div>
      <div>
        <Link to={"#"}>Research</Link>
        <Link to={"#"}>MetaMorpho</Link>
        <Link to={"#"}>Governance</Link>
        <Link to={"#"}>Docs</Link>
        <Link to={"#"}>Blog</Link>
        <Link to={"#"}>Jobs</Link>
        <Link to={"#"}>FAQ</Link>
        <Link to={"#"}>LAUNCH APP</Link>
      </div>
    </div>
  );
};

export default Navigation;
