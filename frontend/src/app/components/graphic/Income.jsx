// export const IncomeGraphic = () => {
//   return (
//     <div className="flex w-[45%] flex-col lg:flex-row">
//       <div className="card bg-white rounded-box grid h-[320px] flex-grow place-items-center"></div>
//     </div>
//   );
// };
// IncomeExpenseChart.js
"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const IncomeGraphic = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Income",
        data: [700000, 750000, 750000, 650000, 600000, 650000],
        backgroundColor: "#84CC16",
      },
      {
        label: "Expense",
        data: [400000, 620000, 500000, 400000, 550000, 450000],
        backgroundColor: "#F97316",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income - Expense",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            });
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "45%",
        background: "white",
        height: "365px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};
