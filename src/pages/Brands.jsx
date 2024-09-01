import React from "react";
import mass from "../assets/images/mass.png";
import llam from "../assets/images/llam.png";
import circle from "../assets/images/circle.png";
import tag from "../assets/images/tag.png";
import whitec from "../assets/images/whitec.png";
import Product from "../components/Product";
import Dropdown from "../components/Dropdown";

const Brands = () => {
  return (
    <div className="py-5 px-5 md:px-2 xl:px-5 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="hidden md:flex items-center md:gap-1 xl:gap-3">
          <button className="bg-transparent rounded-md px-2 py-2 border border-black">
            Back
          </button>
          <p className="font-medium text-violet-600 md:text-[15px] xl:text-[22px]">
            Brand name
          </p>
        </div>

        <div className="flex flex-row-reverse items-center justify-between md:hidden pr-2 pb-4">
          <button className="bg-transparent rounded-md px-2 py-2 border border-black">
            Back
          </button>
          <p className="font-medium text-violet-600 md:text-[15px] xl:text-[22px]">
            Brand name
          </p>
        </div>

        <div className="hidden md:flex items-center md:gap-1 xl:gap-5 xl:ml-[-28px]">
          <p className="md:pr-2 xl:pr-0 lg:text-[15px] xl:text-[22px] lg:pl-6 lg:pr-[-3px]">
            Show:
          </p>
          <button className="flex md:gap-1 xl:gap-2 items-center bg-transparent border border-black md:px-2 xl:px-4 py-2 rounded-md">
            <img src={mass} className="object-contain" />
            Templates
          </button>
          <button className="flex md:gap-1 xl:gap-2 items-center bg-transparent border border-black md:px-2 xl:px-4 py-2 rounded-md">
            <img src={llam} className="object-contain" />
            Email
            <img src={tag} width={25} height={25} className="object-contain" />
          </button>
          <button className="flex md:gap-1 xl:gap-2 items-center bg-transparent border border-black md:px-2 xl:px-4 py-2 rounded-md">
            <img src={circle} className="object-contain" />
            Landers
            <img src={tag} width={25} height={25} className="object-contain" />
          </button>
          <button className="flex md:gap-1 xl:gap-2 items-center bg-transparent border border-black md:px-2 xl:px-4 py-2 rounded-md text-white bg-violet-600">
            <img src={whitec} className="object-contain" />
            Funnels
            <img src={tag} width={25} height={25} className="object-contain" />
          </button>
        </div>
        <div className="md:hidden">
          <Dropdown />
        </div>

        <div className="hidden md:flex gap-2">
          <button className="bg-transparent rounded-md px-2 py-2 border border-black">
            Save
          </button>
          <button className="bg-transparent rounded-md px-2 py-2 border border-black">
            Share
          </button>
        </div>
      </div>
      <div className="bg-gray-300 h-[0.8px] my-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Brands;
