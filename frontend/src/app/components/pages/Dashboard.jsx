"use client";
import { CashCard } from "../card/Cash";
import { ExpensesCard } from "../card/Expense";
import { IncomeCard } from "../card/Income";
import { ExpenseGraphic } from "../chart/Doughnut ";
import { IncomeGraphic } from "../chart/BarChart";

import { useEffect, useState } from "react";

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

export const DashboardPage = () => {
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [filterType, setFilterType] = useState("All");

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
      const response = await fetch(
        `https://expense-tracker-umx8.onrender.com/records`
      );
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
      const response = await fetch(
        `hhttps://expense-tracker-umx8.onrender.com/category`
      );
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

  useEffect(() => {
    fetchRecords();
    fetchCategory();
  }, []);

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

  return (
    <div className="container m-auto">
      <div className="pt-[50px]">
        <div className="flex justify-between">
          <CashCard />
          <ExpensesCard />
          <IncomeCard />
        </div>
        <div className="flex justify-between pt-[30px]">
          <IncomeGraphic />
          <ExpenseGraphic />
        </div>
      </div>
      <div className="pt-[30px]">
        <div className="card bg-white rounded-box  h-[600px] flex-grow place-items-center ">
          <div className="w-full flex justify-start h-[70px] border rounded-t-[12px] items-center">
            <h1 className="font-[600] text-[25px] pl-[20px]">Last Records</h1>
          </div>
          <div className="flex flex-col gap-[15px]  h-full w-full overflow-auto">
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
                  className="card bg-base-100 rounded-box h-15 flex flex-col mt-4 border"
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
