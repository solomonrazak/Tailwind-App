

import React from "react";
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import kk from "../assets/images/kk.png";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex py-2 border-b-[1.2px] border-gray-400 items-center justify-between px-4">
     
      <div className="flex items-center">
        <Logo />
      </div>

      
      <div className="hidden md:flex items-center justify-center flex-grow">
        <div className="flex items-center justify-between px-5 w-full max-w-[500px] bg-gray-100 h-8 rounded-md">
          <div className="flex items-center gap-2 w-full">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search Creative OS"
              className="outline-none bg-transparent w-full"
            />
          </div>
          <img src={kk} width={35} height={10} alt="icon" />
        </div>
      </div>

    
      <div className="md:hidden">
        <IoIosMenu className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;

