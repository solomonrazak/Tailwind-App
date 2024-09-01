
import React, { useState } from "react";
import mass from "../assets/images/mass.png";
import llam from "../assets/images/llam.png";
import circle from "../assets/images/circle.png";
import tag from "../assets/images/tag.png";
import whitec from "../assets/images/whitec.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    label: "Templates",
    icon: mass,
    icon1: tag,
  });

  // Dropdown items
  const items = [
    { label: "Templates", icon: mass, icon1: tag },
    { label: "Email", icon: llam, icon1: tag },
    { label: "Landers", icon: circle, icon1: tag },
    { label: "Funnels", icon: circle, icon1: tag },
  ];

  const handleItemClick = (item) => {
    setSelected(item); // Set the whole item as selected
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className="flex gap-3 items-center">
      {/* Show Text */}
      <p className="md:pr-2 xl:pr-0 lg:text-[15px] xl:text-[22px] lg:pl-6">Show:</p>
      
      {/* Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-transparent border border-black px-4 py-2 rounded-md"
        >
          {/* Display the selected item with both icons */}
          <img src={selected.icon} className="object-contain" alt={selected.label} />
          {selected.label}
          <img src={selected.icon1} className="object-contain" alt={selected.label} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item)}
                className="flex items-center justify-between gap-2 w-full px-4 py-2 text-left hover:bg-violet-500 "
              >
                <img src={item.icon} className="object-contain" alt={item.label} />
                {item.label}
                <img src={item.icon1} className="object-contain" alt={item.label} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

