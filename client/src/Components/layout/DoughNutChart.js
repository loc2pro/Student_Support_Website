import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

export default function DoughNutChart() {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#e8c3b9", "#c45850"],
          data: [7, 4],
        },
      ],
    });
  };
  return (
    <div style={{ height: "100px", width: "100px" }}>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
        }}
      ></Doughnut>
    </div>
  );
}
