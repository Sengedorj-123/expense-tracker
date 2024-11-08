"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export const ExpenseGraphic = () => {
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "Income - Expense",
        data: [220000, 500000, 29999, 200000, 300000],
        backgroundColor: [
          "#3366CC",
          "#FF6666",
          "#FFCC99",
          "#66CCCC",
          "#FF9966",
        ],
        hoverOffset: 4,
        borderColor: "#fff",
        borderWidth: 2,
        cutout: "60%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        width: "50%",
      }}
    >
      <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
        Income - Expense
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ width: "40%" }}>
          <Doughnut data={data} options={options} />
        </div>

        <div
          style={{
            width: "50%",
            marginLeft: "20px",
          }}
        >
          <table
            style={{
              width: "100%",
              textAlign: "left",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {data.labels.map((label, index) => (
                <tr key={index} style={{ height: "40px" }}>
                  <td
                    style={{
                      color: data.datasets[0].backgroundColor[index],
                      paddingLeft: "10px",
                      width: "30%",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    {label}
                  </td>
                  <td style={{ textAlign: "right", width: "35%" }}>
                    {data.datasets[0].data[index].toLocaleString()}$
                  </td>
                  <td style={{ textAlign: "right", width: "15%" }}></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: "right", marginTop: "10px", color: "#666" }}>
            Jun 1 - Nov 30
          </p>
        </div>
      </div>
    </div>
  );
};
