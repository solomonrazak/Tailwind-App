import React, { useState } from "react";
import woman from "../assets/images/woman.png";
import ad from "../assets/images/ad.png";
import land from "../assets/images/land.png";
import { FiDownload } from "react-icons/fi";

const Product = () => {
  const [activeView, setActiveView] = useState("ad");

  const handleAdClick = () => setActiveView("ad");
  const handleLandClick = () => setActiveView("land");

  return (
    <div className="bg-gray-200 rounded-md py-2 border border-gray-400">
      <div className="flex justify-between px-4 py-2 items-center">
        <div className="flex gap-2">
          <div className="rounded-full border-2 border-white">
            <img src={woman} alt="Woman" />
          </div>
          <p className="font-medium">Caraway</p>
        </div>
        <button className="hidden md:block bg-transparent rounded-md px-2 py-1 border border-black">
          Save Funnel
        </button>
      </div>

      <div className="bg-gray-400 w-full h-[0.6px]"></div>

      <div className="flex gap-3 my-3 px-4 md:hidden">
        <button
          className={`w-8 h-8 rounded-full ${
            activeView === "ad" ? "bg-violet-600" : "bg-white"
          }`}
          onClick={handleAdClick}
        ></button>
        <button
          className={`w-8 h-8 rounded-full ${
            activeView === "land" ? "bg-violet-600" : "bg-white"
          }`}
          onClick={handleLandClick}
        ></button>
      </div>

      <div className="p-4">
        <div className="hidden md:flex items-center gap-2">
          <div>
            <p className="text-gray-500 pb-2 font-medium">Ad Creative</p>
            <div>
              <img src={ad} alt="Ad" className="rounded-md" />
            </div>
          </div>

          <div className="bg-violet-600 h-[0.6px] w-16"></div>

          <div>
            <p className="text-gray-500 pb-2 font-medium">Landing Page</p>
            <div>
              <img src={land} alt="Landing" className="rounded-md" />
            </div>
          </div>
        </div>

        {/* Mobile View: Show only one section at a time */}
        <div className="md:hidden">
          {activeView === "ad" && (
            <div>
              <p className="text-gray-500 pb-2 font-medium">Ad Creative</p>
              <div>
                <img src={ad} alt="Ad" className="w-full rounded-md" />
              </div>
            </div>
          )}
          {activeView === "land" && (
            <div>
              <p className="text-gray-500 pb-2 font-medium">Landing Page</p>
              <div>
                <img src={land} alt="Landing" className="w-full rounded-md" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-400 w-full h-[0.6px]"></div>
      <div className="flex justify-end gap-2 mt-4 pr-4">
        <button className="bg-transparent border border-black px-2 py-1 rounded-md text-[14px] font-medium">
          Request Template
        </button>
        <button className="bg-transparent border border-black px-2 py-1 rounded-md text-[14px] font-medium">
          View Funnel
        </button>
        <button className="bg-transparent border border-black px-2 py-1 rounded-md font-medium">
          <FiDownload />
        </button>
      </div>
      <div className="flex justify-end mt-4 pr-4 md:hidden">
        <button className="bg-transparent border border-black px-2 py-1 rounded-md text-[14px] font-medium">
          Save Funnel
        </button>
      </div>
    </div>
  );
};

export default Product;
