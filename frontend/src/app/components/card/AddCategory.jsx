"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCar,
  FaCamera,
  FaAnchor,
  FaBasketballBall,
  FaToiletPaper,
  FaRoad,
} from "react-icons/fa";
import { MdWallpaper } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { PiBowlFoodFill, PiExamFill } from "react-icons/pi";
import { IoIosMic } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
import { Arrow } from "../icons/Arrow";

export const AddCategoryInRecord = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [selectedColor, setSelectedColor] = useState("bg-green-500");
  const [selectedCategoryName, setSelectedCategoryName] = useState("Home");

  const icons = [
    { icon: <FaBasketballBall />, name: "Basketball" },
    { icon: <PiExamFill />, name: "Exam" },
    { icon: <FaToiletPaper />, name: "ToiletPaper" },
    { icon: <GiFruitBowl />, name: "Fruit" },
    { icon: <MdWallpaper />, name: "Wallpaper" },
    { icon: <FaComputer />, name: "Computer" },
    { icon: <FaHome />, name: "Home" },
    { icon: <RiStockLine />, name: "Stock" },
    { icon: <PiBowlFoodFill />, name: "Food" },
    { icon: <FaUser />, name: "User" },
    { icon: <FaCar />, name: "Car" },
    { icon: <FaCamera />, name: "Camera" },
    { icon: <FaAnchor />, name: "Anchor" },
    { icon: <IoIosMic />, name: "Karaoke" },
    { icon: <FaRoad />, name: "road" },
  ];

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-[#fc466b]",
    "bg-[#46fcec]",
    "bg-[#a7fc46]",
  ];

  const handleClickIcon = (icon, name) => {
    setSelectedIcon(name);
    setSelectedCategoryName(name);
  };

  const handleInputChange = (e) => {
    setSelectedCategoryName(e.target.value);
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();

    const category = {
      name: selectedCategoryName,
      icon_color: selectedColor,
      category_icon: selectedIcon,
    };

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      };

      const response = await fetch(
        `https://expense-tracker-umx8.onrender.com`,
        options
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log("Category added:", data);
      document.getElementById("my_modal_39").close();
    } catch (error) {
      console.error("Error occurred during submission:", error);
    }
  };

  const closeModal = () => {
    document.getElementById("my_modal_39").close();
  };

  return (
    <div>
      <dialog id="my_modal_39" className="modal">
        <div className="modal-box">
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              x
            </button>
          </div>
          <h3 className="font-bold text-lg mb-3">Add Category</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`rounded-lg w-[84px] h-[48px] ${selectedColor} text-white flex   items-center justify-center`}
              >
                {icons.find((icon) => icon.name === selectedIcon)?.icon}
                <div className="ml-2"></div>
                <Arrow />
              </button>
              <input
                type="text"
                value={selectedCategoryName}
                onChange={handleInputChange}
                placeholder="name"
                className="border p-3 rounded-lg w-full"
              />
            </div>
            {showDropdown && (
              <div className="bg-gray-50 rounded-lg p-4 shadow-md">
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {icons.map((icon, index) => (
                    <button
                      key={index}
                      onClick={() => handleClickIcon(icon.icon, icon.name)}
                      className="p-2 text-gray-600 hover:bg-gray-200 rounded"
                    >
                      {icon.icon}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}
            <button onClick={handleCreateSubmit} className="btn  btn-success ">
              Add
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
