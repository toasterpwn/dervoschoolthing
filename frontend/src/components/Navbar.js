import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#3B4252] p-2">
      <div className="flex flex-row justify-around content-center">
        <div className="flex text-2xl">
          <a className="hover:text-[#5E81AC]" href="/">
            Home
          </a>
        </div>
        <div className="flex text-2xl">
          <a className="hover:text-[#5E81AC]" href="/url-list">
            Url List
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
