import React from "react";
import compass from "../assets/images/compass.png";
import { IoIosArrowBack } from "react-icons/io";
import board from "../assets/images/board.png";
import dash from "../assets/images/dash.png";
import band from "../assets/images/band.png";
import tag from "../assets/images/tag.png";
import { BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="pb-10">
      <div className="bg-slate-50 pr-3 pl-2 border-r-2 border-gray-300 pb-7 pt-9">
        <div className="space-y-2 pl-2">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-3 py-2 px-3">
              <img src={compass} className="object-contain" />
              <p className="text-[14px] xl:text-[22px]">Inspiration</p>
            </div>
            <div className="flex">
              <IoIosArrowBack />
              <IoIosArrowBack className="pr-[-20px]" />
            </div>
          </div>
          <div className="flex items-center gap-3 py-2 px-3">
            <img src={board} />
            <p className="text-[14px] xl:text-[22px]">Templates</p>
          </div>
          <div className="flex items-center gap-3 py-2 px-3">
            <img src={dash} />
            <p className="text-[14px] xl:text-[22px]">Collections</p>
          </div>
          <div className="flex items-center gap-3 border border-violet-600 rounded-md py-2 px-3">
            <img src={band} />
            <p className="text-[14px] xl:text-[22px]">Brands</p>
          </div>
        </div>
        <div className="h-[0.6px] bg-gray-400 w-[80%] my-6 ml-4"></div>
        <div className="pl-2">
          <p className="text-gray-500 text-[14px] xl:text-[18px] font-medium mb-2">
            FEATURED
          </p>
          <div className="flex flex-col gap-1 pl-3">
            <div className="flex gap-6 items-center">
              <p className="text-[15px] xl:text-[20px]">Hidden gems</p>
              <img
                src={tag}
                width={30}
                h={25}
                className="object-contain mt-1"
              />
            </div>
            <div className="flex gap-7 items-center">
              <p className="text-[15px] xl:text-[20px]">Evergreen ads</p>
              <img
                src={tag}
                width={30}
                h={25}
                className="object-contain mt-1"
              />
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-[15px] xl:text-[20px]">Testing lab</p>
              <img
                src={tag}
                width={30}
                h={25}
                className="object-contain mt-1"
              />
            </div>
          </div>
        </div>
        <div className="h-[0.6px] bg-gray-400 w-[80%] my-6 ml-4"></div>

        <div className="px-3">
          <div className="flex justify-between w-full mb-4">
            <p className="text-gray-500 text-[14px] xl:text-[18px] font-medium md:pl-3 xl:pl-5">
              SAVED
            </p>
            <FiPlus className="text-[22px] font-medium" />
          </div>
          <div className="flex w-full">
            <div className="h-[10rem] w-[0.5px] bg-violet-600"></div>
            <div className="w-full md:pl-5 xl:pl-9 space-y-3">
              <p className="text-[15px] xl:text-[18px] font-medium">
                All Saved
              </p>
              <div className="flex items-center w-[100%] justify-between md:pr-4 xl:pr-7">
                <p className="text-[15px] xl:text-[18px] font-medium">
                  Board name
                </p>
                <BsThreeDots className="" />
              </div>
              <div className="flex items-center w-[100%] justify-between  md:pr-4 xl:pr-7">
                <p className="text-[15px] xl:text-[18px] font-medium">
                  Board name
                </p>
                <BsThreeDots className="" />
              </div>
              <div className="flex items-center w-[100%] justify-between  md:pr-4 xl:pr-7">
                <p className="text-[15px] xl:text-[18px] font-medium">
                  Board name
                </p>
                <BsThreeDots className="" />
              </div>
              <div className="flex items-center w-[100%] justify-between  md:pr-4 xl:pr-7">
                <p className="text-[15px] xl:text-[18px] font-medium">
                  Board name
                </p>
                <BsThreeDots className="" />
              </div>
              <div className="flex items-center w-[100%] justify-between  md:pr-4 xl:pr-7">
                <p className="text-[15px] xl:text-[18px] font-medium">
                  Board name
                </p>
                <BsThreeDots className="" />
              </div>
            </div>
          </div>
          <p className="text-[15px] xl:text-[18px] font-medium pl-4 pt-3">
            View all boards
          </p>
        </div>
        <div className="h-[0.6px] bg-gray-400 w-[80%] my-6 ml-4"></div>

        <div className="pl-4">
          <p className="flex flex-col gap-2 font-medium md:text-[17px] xl:text-[23px]">
            <span>Settings</span>
            <span>Help & Feedback</span>
            <span>Join the CreativeOS Stack</span>
          </p>
        </div>
        <div className="h-[0.6px] bg-gray-400 w-[80%] my-6 ml-4"></div>
        <div className="flex items-center gap-3 pl-4">
          <div className="bg-violet-500 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-full"></div>
          <p className="font-medium md:text-[17px] xl:text-[23px]">
            My Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
