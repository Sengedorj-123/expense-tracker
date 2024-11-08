"use client";
import { useEffect, useState } from "react";
import { RecordCard } from "../card/Record";
import { Type } from "../card/Type";
import { AddCategoryInRecord } from "../card/AddCategory";
import React from "react";
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
import { PiBowlFoodFill, PiExamFill } from "react-icons/pi";
import { RiStockLine } from "react-icons/ri";
import { MdWallpaper } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { IoIosMic } from "react-icons/io";

export const RecordsPage = () => {
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState("All");
  const [filterCat, setFilterCat] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const icons = {
    Home: FaHome,
    User: FaUser,
    Car: FaCar,
    Camera: FaCamera,
    Anchor: FaAnchor,
    Basketball: FaBasketballBall,
    Food: PiBowlFoodFill,
    Exam: PiExamFill,
    Stock: RiStockLine,
    ToiletPaper: FaToiletPaper,
    Road: FaRoad,
    Wallpaper: MdWallpaper,
    Computer: FaComputer,
    Fruit: GiFruitBowl,
    Karaoke: IoIosMic,
  };

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://expense-tracker-umx8.onrender.com`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseData = await response.json();
      setRecords(responseData);
    } catch (error) {
      console.error(error);
      setError("Error occurred while fetching records.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://expense-tracker-umx8.onrender.com`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const responseData = await response.json();
      setCategories(responseData);
    } catch (error) {
      console.error(error);
      setError("Error occurred while fetching categories.");
    } finally {
      setLoading(false);
    }
  };

  const addRecord = (newRecord) => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  useEffect(() => {
    fetchRecords();
    fetchCategory();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const filteredRecords = records.filter((record) => {
    if (filterType !== "All" && record.transaction_type !== filterType) {
      return false;
    }

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(record.category_id)
    ) {
      return false;
    }

    return true;
  });

  const filteredCategories = categories.filter((category) => {
    if (filterCat === "") return true;
    return category.name.toLowerCase().includes(filterCat.toLowerCase());
  });

  return (
    <div className="container m-auto pt-[50px] flex gap-[20px] h-[80vh]">
      <div className="w-[30%] h-[80vh] bg-white rounded-[12px] shadow-lg flex flex-col items-center">
        <div className="w-full flex justify-start px-[50px] pt-[20px]">
          <h2 className="text-2xl font-bold text-gray-800">Records</h2>
        </div>
        <RecordCard onAddRecord={addRecord} />

        <div className="w-full px-[50px]">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="w-full">
          <Type onFilterChange={setFilterType} />
        </div>

        <div className="w-full px-[50px] pt-[20px] flex justify-between">
          <h1 className="font-[600]">Category</h1>

          <button
            className="text-[#dddddd]"
            onClick={() => {
              setFilterCat("");
              console.log("Filter cleared, current filterCat:", filterCat);
            }}
          >
            Clear
          </button>
        </div>

        <div className="pt-[20px] w-[80%]">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Search categories"
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
          />
        </div>

        <ul className="w-full p-4 h-[43vh] overflow-auto">
          {filteredCategories.map((category) => (
            <li key={category.id} className="flex items-center gap-2 p-2">
              <span
                className={`px-[20px] rounded-full flex items-center gap-[6px] ${category.color}`}
              >
                <input
                  type="checkbox"
                  className="checkbox w-[20px] h-[20px]"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                {category.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="w-full flex pl-[50px]">
          <button
            className="flex mb-[10px]"
            onClick={() => document.getElementById("my_modal_39").showModal()}
          >
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[25px]"
                src="https://cdn-icons-png.flaticon.com/128/13821/13821476.png"
                alt=""
              />
              Add Category
            </div>
          </button>
          <AddCategoryInRecord onAddCategory={addCategory} />
        </div>
      </div>

      <div className="pl-[50px] w-[75%]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[20px]">
            <button className="btn btn-square bg-[#E5E7EB]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7906 5.23017C13.0777 5.52875 13.0684 6.00353 12.7698 6.29063L8.83208 10L12.7698 13.7094C13.0684 13.9965 13.0777 14.4713 12.7906 14.7698C12.5035 15.0684 12.0287 15.0777 11.7302 14.7906L7.23017 10.5406C7.08311 10.3992 7 10.204 7 10C7 9.79599 7.08311 9.60078 7.23017 9.45938L11.7302 5.20938C12.0287 4.92228 12.5035 4.93159 12.7906 5.23017Z"
                  fill="#0F172A"
                />
              </svg>
            </button>
            <h1>Last 30 Days</h1>
            <button className="btn btn-square bg-[#E5E7EB]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z"
                  fill="#0F172A"
                />
              </svg>
            </button>
          </div>

          <div>
            <select
              defaultValue=""
              className="select select-success w-full max-w-xs"
            >
              <option value="" disabled>
                Newest first
              </option>
            </select>
          </div>
        </div>

        <div className="py-[20px]">
          <h1 className="font-[600]">Today</h1>
          <div className="flex flex-col gap-[20px] pt-[20px] h-[40vh] overflow-auto">
            {loading ? (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center">
                  <span className="loading loading-infinity text-info w-[50px]"></span>
                  <h1>Loading...</h1>
                </div>
              </div>
            ) : filteredRecords.length > 0 ? (
              filteredRecords.map((record, index) => (
                <div
                  key={index}
                  className="card bg-base-100 rounded-box h-15 flex flex-col mt-4"
                >
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-[15px]">
                      {categories.map((category) => {
                        if (category.id === record.category_id) {
                          return (
                            <span
                              key={category.id}
                              className={`p-2 w-[40px] h-[40px] rounded-lg flex items-center justify-center ${category.icon_color}`}
                            >
                              {icons[
                                category.category_icon.charAt(0).toUpperCase() +
                                  category.category_icon.slice(1)
                              ] &&
                                React.createElement(
                                  icons[
                                    category.category_icon
                                      .charAt(0)
                                      .toUpperCase() +
                                      category.category_icon.slice(1)
                                  ]
                                )}
                            </span>
                          );
                        }
                        return null;
                      })}
                      <div className="flex flex-col">
                        <p className="font-[600] text-black text-[13px]">
                          {record.name}
                        </p>
                        <p>
                          {new Date(record.createdat).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              weekday: "short",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col"></div>
                    <p
                      className={`flex items-center p-3 font-bold ${
                        record.transaction_type === "EXP"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {record.transaction_type === "EXP" ? "-" : "+"}{" "}
                      {record.amount} ₮
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-red-600">No records available</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
