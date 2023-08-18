import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
      <header className="h-[80px] shadow-md flex items-center justify-start mb-11">
        <div className="w-[130px] ml-8">
          <img className="w-[100%]" src={Logo} />
        </div>
      </header>
    </>
  );
}
